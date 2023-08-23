// import { storeToRefs } from "pinia";
// import { useAppStore } from "./store/app";

// const appStore = useAppStore();
// const { projectV2 } = storeToRefs(appStore);

import type { projectV2 } from "@/types";

const genRanHex = (size: number) => {
  return [...Array(size)]
    .map(() => Math.floor(Math.random() * 16)
    .toString(16))
    .join("");
};

/**
 * A function that generates an ID for you automatically
 * @param addToSet an optional parameter that controls whether the ID will
 * automatically be added to the allIds Set
 * @returns the random ID
 */
export function generateId(project: projectV2, addToSet: boolean = true): string {
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
