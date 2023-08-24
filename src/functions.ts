import type { Page, PageItem, projectV2, Id } from "@/types";

import { useAppStore } from "@/store/app";
import { storeToRefs } from "pinia";
import { defaultDivider, defaultPage, defaultSection } from "./constants";

function genRanHex(size: number): string {
  return [...Array(size)]
    .map(() => Math.floor(Math.random() * 16)
    .toString(16))
    .join("");
}

/**
 * A function that generates an ID for you automatically
 * @param addToSet an optional parameter that controls whether the ID will
 * automatically be added to the allIds Set
 * @returns the random ID
 */
export function generateId(
  project: projectV2,
  addToSet: boolean = true
): string {
  let randomId: string;
  // Continues generating random IDs if they exist
  do {
    randomId = genRanHex(4);
  } while (project.state.allIds.has(randomId));

  // Adds it to set automatically
  if (addToSet) {
    project.state.allIds.add(randomId);
  }

  return randomId;
}

/** Creates an empty page. */
export function createPage() {
  const appStore = useAppStore();
  const { projectV2 } = storeToRefs(appStore);
  const defaults = projectV2.value.settings.defaults;

  const newPage = { ...defaultPage };
  newPage.pageName = defaults.pageName;
  newPage.id = generateId(projectV2.value);
  // The new page seem to be pre-populated with the
  // sections of the previously created page.
  newPage.pageItems = [];

  projectV2.value.pages.push(newPage);
}

/** Creates a default section. */
export function createSection() {
  const appStore = useAppStore();
  const { projectV2 } = storeToRefs(appStore);
  const defaults = projectV2.value.settings.defaults;

  // For readability
  const currentPage = projectV2.value.state.currentPage - 1;
  const page = projectV2.value.pages[currentPage];

  // Happens when you try to create a Section while having no Pages
  if (page === undefined) {
    return;
  }

  const newSection = { ...defaultSection };
  newSection.title = defaults.sectionTitle;
  newSection.text = defaults.sectionText;
  newSection.id = generateId(projectV2.value);

  page.pageItems.push(newSection);
}

/** Creates a divider. */
export function createDivider() {
  const appStore = useAppStore();
  const { projectV2 } = storeToRefs(appStore);

  // For readability
  const currentPageIndex = projectV2.value.state.currentPage - 1;
  const page = projectV2.value.pages[currentPageIndex];

  if (page === undefined) {
    return;
  }

  const newDivider = { ...defaultDivider };
  newDivider.id = generateId(projectV2.value);

  page.pageItems.push(newDivider);
}

/**
 * Delete a given page.
 * @param page The page that should be deleted.
 */
export function deletePage(page: Page) {
  // Happens when you have no more pages to delete
  if (page === undefined) {
    return;
  }

  const appStore = useAppStore();
  const { projectV2 } = storeToRefs(appStore);

  const pages = projectV2.value.pages;
  const index = pages.findIndex((i) => {
    return i.id === page.id;
  });

  // Delete it
  try {
    pages.splice(index, 1);

    // Remove ID from allIds set
    projectV2.value.state.allIds.delete(page.id);
  } catch (e) {
    console.log(`Error trying to delete page: ${e}`);
  }
}

/**
 * Duplicates a given page.
 * @param page The Page that is being duplicated.
 * @param deepCopy True by default. If true it will make a complete copy.
 * If false it will make a reference to it.
 */
export function duplicatePage(page: Page, deepCopy: boolean = true) {
  const appStore = useAppStore();
  const { projectV2 } = storeToRefs(appStore);

  const pages = projectV2.value.pages;
  const index = pages.findIndex((i) => {
    return i.id === page.id;
  }) + 1; // Plus one ensures that it's inserted after

  // Duplicate it
  try {
    deepCopy
      ? pages.splice(index, 0, {...page})
      : pages.splice(index, 0, page);
  } catch (e) {
    console.log(`Error while duplicating PageItem: ${e}`);
  }
}

/**
 * Deletes any page item; that is:
 *
 * * Sections
 * * Dividers
 * @param pageItem The item that should be deleted.
 */
export function deletePageItem(pageItem: PageItem) {
  const appStore = useAppStore();
  const { projectV2 } = storeToRefs(appStore);

  // Attempt deleting it first
  const currentPage = projectV2.value.state.currentPage - 1;
  const sections = projectV2.value.pages[currentPage].pageItems;
  const index = sections.findIndex((i) => {
    return i.id === pageItem.id;
  });

  // Remove it
  try {
    sections.splice(index, 1);

    // Remove ID from allIds set
    projectV2.value.state.allIds.delete(pageItem.id);
  } catch (e) {
    console.log(`Error deleting Page Item: ${e}`);
  }
}

/**
 * Duplicates any page item; that is:
 *
 * * Sections
 * * Dividers
 * @param pageItem The Page Item
 * @param deepCopy Whether or not the copy will be shared via reference or
 * copied completely.
 */
export function duplicatePageItem(
  pageItem: PageItem,
  deepCopy: boolean = true,
) {
  const appStore = useAppStore();
  const { projectV2 } = storeToRefs(appStore);

  const currentPage = projectV2.value.state.currentPage - 1;
  const sections = projectV2.value.pages[currentPage].pageItems;
  const index = sections.findIndex((i) => {
    return i.id === pageItem.id;
  }) + 1; // This one ensures that the duplicated objects are made one ahead

  // index += (() => {
  //   switch (pageItem.type) {
  //     case "section":
  //       return 2; // This +2 ensures that the duplication happens after
  //     case "divider":
  //       return 1;
  //     default:
  //       return 1;
  //   }
  // })();

  // Duplicate it
  try {
    deepCopy
      ? sections.splice(index, 0, {
        ...pageItem,
        id: generateId(projectV2.value) // Overwrite the ID with a new one
      })
      : sections.splice(index, 0, pageItem);
  } catch (e) {
    console.log(`Error while duplicating PageItem: ${e}`);
  }
}

/**
 * Function to quickly change which page is being viewed
 * @param pageNumber The page number you want to change to. Starts at 1.
 */
export function changePageTo(pageNumber: number) {
  const appStore = useAppStore();
  const { projectV2 } = storeToRefs(appStore);

  projectV2.value.state.currentPage = pageNumber;
}

/** This function changes a page item in Preview mode into Edit mode, and vice
 * versa.
 * @param pageItem The Page Item to be toggled.
 */
export function togglePageItemEditMode(pageItem: PageItem) {
  pageItem.editModeEnabled === undefined
    ? pageItem.editModeEnabled = false
    : pageItem.editModeEnabled = !pageItem.editModeEnabled;
}

/**
 * Moves a Page Item by an offset.
 * @param page The Page. Since it doesn't get the current page, this can be
 * called when not on the same page.
 * @param offset The offset.
 */
export function movePageItem(page: Page, id: Id, offset: number) {
  const index = page.pageItems.findIndex((i) => {
    return i.id === id;
  });
  const newIndex = index + offset;

  // If it's at the top already, do nothing
  if (newIndex < 0) {
    return;
  // If it's at the bottom already, do nothing
  } else if (newIndex > page.pageItems.length) {
    return;
  }

  // Duplicate the new item
  const item = page.pageItems[index];
  // Delete the old item
  page.pageItems.splice(index, 1);
  // Insert it into the new position
  page.pageItems.splice(newIndex, 0, item);
}
