import type { PageItem, projectV2 } from "@/types";

import { useAppStore } from "@/store/app";
import { storeToRefs } from "pinia";
import { defaultPage, defaultSection } from "./constants";

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
  const sections = projectV2.value.pages[currentPage].sections;
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
  newPage.sections = [];

  projectV2.value.pages.push(newPage);
}

/** Creates a default section. */
export function createSection() {
  const appStore = useAppStore();
  const { projectV2 } = storeToRefs(appStore);
  const defaults = projectV2.value.settings.defaults;

  // For readability
  const currentPage = projectV2.value.state.currentPage - 1;

  const newSection = { ...defaultSection };
  newSection.title = defaults.sectionTitle;
  newSection.text = defaults.sectionText;
  newSection.id = generateId(projectV2.value);

  projectV2.value.pages[currentPage].sections.push(newSection);
}
