import type { Divider, PageItem, Section, projectV2 } from "@/types";

import { useAppStore } from "@/store/app";
import { storeToRefs } from "pinia";

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
