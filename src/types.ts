export enum ProjectVersion {
  V1,
  V1_1,
  V2,
}

export type projectV2 = {
  /** The version number of the project format. Each increment indicates
   * backward-incompatible changes. */
  version: number,

  /** The project settings. */
  settings: {
    /** Whether pagination is turned on or not. */
    pagesOn: boolean,
  },

  /** The state of the project. */
  state: {
    currentPage: number,
    activatedChoices: Array<Id>,
  },

  /** The main content of the CYOA. */
  pages: Array<Page>,
}

/** The unique identifier of an object. */
type Id = string;

/** A page in the CYOA. */
export type Page = {
  /** The ID of a page. */
  id: Id,
  /** The name of the page, used in pagination. */
  pageName: string,
  /** The sections. */
  sections: Array<Section>,
}

/** A section in the CYOA. Equivalent to a Row in the first Creator. */
export type Section = {
  /** The ID of a section. */
  id: Id,
  /** The title of a section. */
  title: string,
  /** The accompanying text of a section. */
  text: string,
  /** Whether it shows the edit menu or not */
  editModeEnabled: boolean,
  /** The choices within a section. */
  choices: Array<Choice>,
}

export type Choice = {
  /** The ID of a choice. */
  id: Id,
  /** The title of a choice. */
  title: string,
  /** The text of a choice. */
  text: string,
}
