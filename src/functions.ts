import { Page, PageItem, Id, projectV2, Choice, Settings } from "@/types";

import { useAppStore } from "@/store/app";
import { storeToRefs } from "pinia";
import { defaultDivider, defaultPage, defaultSection } from "./constants";

// /**
//  * Highly dangerous arbitrary object accessor, given an array of strings.
//  *
//  *
//  * For example, this:
//  *
//  * ```js
//  * let ob = { first: { second: { third: 'secret!' } } };
//  * let result = accessObject(ob, ["first", "second", "third"]);
//  * console.log(result);
//  * ```
//  *
//  * returns:
//  * `secret!`
//  *
//  * @param obj The object to search in.
//  * @param access An array of strings representing the keys of an object.
//  * @returns The given value.
//  */
// function accessObject(obj: projectV2, access: Array<any>): Object {
//   let result = { ...obj }; // Copy the object
//   let latestObjectType = typeof result;

//   if (!result) throw `Error: the given object is falsy!
// obj = ${obj}`;

//   for (const [i, depth] of access.entries()) {
//     console.log(`i = ${i}
// depth = ${depth}
// typeof obj = ${typeof obj}`);

//     latestObjectType = typeof result[depth as keyof latestObjectType];

//     result = result[depth as keyof typeof obj];
//   }

//   return result;
// }

/**
 * Return the given Object with a path.
 * @param project The Project.
 * @param objectPath The Object path. Can be retrieved using
 * `findObjectPathViaId()`.
 * @returns The Object.
 */
function getObjectViaPath(
  project: projectV2,
  objectPath: Array<number>
): Page | PageItem | Choice {
  let parent: Page | PageItem | Choice;

  switch (objectPath.length) {
    // Page-level
    case 1:
      return project.pages[objectPath[0]];
    // Page Item-level
    case 2:
      // eslint-disable-next-line no-case-declarations
      const test = project.pages[objectPath[0]].pageItems[objectPath[1]];
      console.log("===\ntest =");
      console.log(test);
      console.log("===");
      return test;
    // Choice level
    case 3:
      parent = project.pages[objectPath[0]].pageItems[objectPath[1]];

      if (parent.type === "section") {
        return parent.choices[objectPath[2]];
      } else if (parent.type === "divider") {
        return parent;
      } else {
        return parent;
      }
    case 0:
      throw "Error: given objectPath is empty!";
    default:
      throw "Error: Could not find object via path";
  }
}

/**
 * Gets an Object using its ID. It only gets the newest Object.
 * @param project The Project object.
 * @param id The ID of the object.
 * @returns The Object itself.
 */
export function getObjectViaId(
  project: projectV2,
  id: Id
): Page | PageItem | Choice {
  const objectPath = findObjectPathViaId(project, id);
  return getObjectViaPath(project, objectPath);
}

/**
 * Returns a list of arrays from an array, where each subsequent array is the
 * previous one with one element removed from the end.
 *
 * For example, this:
 *
 * ```js
 * getReverseArrays([3, 2, 1]);
 * ```
 *
 * Returns: [3,2,1], [3,2], [3]
 * @param originalArray The original array.
 * @returns The array of reversed arrays.
 */
function getReverseArrays(originalArray: Array<number>): Array<Array<number>> {
  const paths = [];

  for (let i = 0; i < originalArray.length; i++) {
    const newPath = [...originalArray];
    newPath.splice(originalArray.length - i, originalArray.length);
    // paths.push(newPath);
    paths.unshift(newPath);
  }

  return paths;
}

/**
 * Gets the entire settings applied to an object, with respect to global and
 * local overwrites.
 * @param project The Project file.
 * @param id The ID of the object.
 * @returns The settings.
 */
export function getSettingsOfObject(project: projectV2, id: Id) {
  const objectPath = findObjectPathViaId(project, id);
  // const object = getObjectViaPath(project, objectPath);
  const allPaths = getReverseArrays(objectPath);

  console.log(objectPath);
  console.log(allPaths);

  let combinedSettings: Settings = {
    scope: "global", // will be changed
  };

  outer: for (const [i, path] of allPaths.entries()) {
    console.log(`path is [${path}]`);
    const object = getObjectViaPath(project, path);
    console.log("combinedSettings is:");
    console.log(combinedSettings);
    console.log(`object = ${object}`);

    // const isFinalIteration = (i + 1) === allPaths.length;

    if (!object) {
      console.error(`Error: object is null or undefined. More info:
Iteration: ${i}
Path: ${path}
allPaths: ${allPaths}`);
      continue;
    }

    switch (object.type) {
      case "page":
      case "section":
      case "divider":
      case "choice":
        combinedSettings = { ...combinedSettings, ...object.settings };
        continue outer;
      default:
        throw `Error: could not get settings of object: ${object}`;
    }
  }

  // Give it the correct scope
  const fullObject = getObjectViaPath(project, allPaths[allPaths.length - 1]);

  switch (fullObject.type) {
    case "page":
      combinedSettings.scope = "page";
      break;
    case "section":
      combinedSettings.scope = "section";
      break;
    case "divider":
      combinedSettings.scope = "pageItem";
      break;
    case "choice":
      combinedSettings.scope = "choice";
  }

  console.log("Final settings:");
  console.log(combinedSettings);

  return combinedSettings;
}

/**
 * Finds an object path via ID
 * @param project
 * @param id
 * @returns An array of numbers representing the indexes of the Project object.
 */
function findObjectPathViaId(
  project: projectV2,
  id: Id
): Array<number> {

  // Optimizations below:

  // Find if the ID is a page
  // const pageSearch = project.pages.findIndex((i) => {
  //   if (i.id === id) return true;
  // });

  // // If the ID is a page
  // if (pageSearch != -1) {
  //   console.log("ID is a page!");
  //   return;
  // }

  const finalObjectPath = [];

  let foundObject = false;
  let currentPageIndex = undefined;
  let currentPageItemIndex = undefined;
  // let currentSectionIndex;
  let currentChoiceIndex = undefined;

  // Iterate through each page
  outer: for (const [i, page] of project.pages.entries()) {
    currentPageIndex = i;

    if (page.id === id) {
      foundObject = true;
      // Reset lower level searches
      currentPageItemIndex = undefined;
      currentChoiceIndex = undefined;
      break outer;
    }

    // Iterate through each page item
    for (const [i, pageItem] of page.pageItems.entries()) {
      currentPageItemIndex = i;

      if (pageItem.id === id) {
        foundObject = true;
        // Reset lower level searches
        currentChoiceIndex = undefined;
        break outer;
      }

      // If the item is of type Section, iterate through the Choices
      // Checks if the Section has choices first, though
      if (pageItem.type === "section" && pageItem.choices.length >= 1) {
        for (const [i, choice] of pageItem.choices.entries()) {
          currentChoiceIndex = i;

          if (choice.id === id) {
            foundObject = true;
            break outer;
          }
        }
      }
    }
  }

  if (!foundObject) {
    throw "Did not find object!";
  }

  // Add path to Object path
  // currentPageIndex stupidly starts at 1, so we have to offset that here
  if (currentPageIndex !== undefined) {
    finalObjectPath.push(currentPageIndex);
  }
  if (currentPageItemIndex !== undefined) {
    finalObjectPath.push(currentPageItemIndex);
  }
  if (currentChoiceIndex !== undefined) {
    finalObjectPath.push(currentChoiceIndex);
  }

  return finalObjectPath;
}

function genRanHex(size: number): string {
  return [...Array(size)]
    .map(() => Math.floor(Math.random() * 16)
    .toString(16))
    .join("");
}

/**
 * A function that generates an ID for you automatically
 * @param length The length of the ID
 * @param idSet The set that contains all the current IDs. Make this empty if
 * you just want to generate an ID.
 * @param addToSet A parameter that controls whether the ID will automatically
 * be added to the set provided. Defaults to true.
 * @returns The randomly generated ID.
 */
export function generateId(
  length: number,
  idSet: Set<Id>,
  addToSet: boolean = true,
): string {
  let randomId: string;
  // Continues generating random IDs if they exist
  do {
    randomId = genRanHex(length);
  } while (idSet.has(randomId));

  // Adds it to set automatically
  if (addToSet) {
    idSet.add(randomId);
  }

  return randomId;
}

/** Creates an empty page. */
export function createPage() {
  const appStore = useAppStore();
  const { projectV2 } = storeToRefs(appStore);
  const idList = projectV2.value.state.allIds;
  const defaults = projectV2.value.settings.projectSettings?.defaults ?? {};
  const idLength = defaults?.idLength ?? 5;

  const newPage = { ...defaultPage };
  newPage.pageName = defaults?.pageName ?? "page";
  newPage.id = generateId(idLength, idList);
  // The new page seem to be pre-populated with the
  // sections of the previously created page.
  newPage.pageItems = [];

  projectV2.value.pages.push(newPage);
}

/** Creates a default section. */
export function createSection() {
  const appStore = useAppStore();
  const { projectV2 } = storeToRefs(appStore);

  // For readability
  const defaults = projectV2.value.settings.projectSettings?.defaults;
  const currentPage = projectV2.value.state.currentPage - 1;
  const idList = projectV2.value.state.allIds;
  const idLength = defaults?.idLength ?? 5;
  const page = projectV2.value.pages[currentPage];

  // Happens when you try to create a Section while having no Pages
  if (page === undefined) {
    return;
  }

  const newSection = { ...defaultSection };
  newSection.title = defaults?.sectionTitle ?? "section title";
  newSection.text = defaults?.sectionText ?? "section text";
  newSection.id = generateId(idLength, idList);

  page.pageItems.push(newSection);
}

/** Creates a divider. */
export function createDivider() {
  const appStore = useAppStore();
  const { projectV2 } = storeToRefs(appStore);

  // For readability
  const defaults = projectV2.value.settings.projectSettings?.defaults;
  const idList = projectV2.value.state.allIds;
  const idLength = defaults?.idLength ?? 5;
  const currentPageIndex = projectV2.value.state.currentPage - 1;
  const page = projectV2.value.pages[currentPageIndex];

  if (page === undefined) {
    return;
  }

  const newDivider = { ...defaultDivider };
  newDivider.id = generateId(idLength, idList);

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

  const currentPage = projectV2.value.state.currentPage;

  const pages = projectV2.value.pages;
  const index = pages.findIndex((i) => {
    return i.id === page.id;
  });

  // Delete it
  try {
    pages.splice(index, 1);

    // Remove ID from allIds set
    projectV2.value.state.allIds.delete(page.id);

    // This will move the user back a page, just in case they deleted the last
    // page
    if (currentPage > 1) {
      changePageTo(index);
    }
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
  const idList = projectV2.value.state.allIds;
  const defaults = projectV2.value.settings.projectSettings?.defaults;
  const idLength = defaults?.idLength ?? 5;
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
        id: generateId(idLength, idList) // Overwrite the ID with a new one
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
