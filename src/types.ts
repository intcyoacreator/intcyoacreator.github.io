// export enum ProjectVersion {
//   V1,
//   V1_1,
//   V2,
// }

import { Component } from "vue";

export type CreatorMode = "none" | "create" | "preview" | "view";

export type ApplicationState = {
  /** The version of this application. */
  appVersion: string,

  /**
   * The project version of the currently loaded project.
   *
   * Assume V2 by default.
   */
  loadedProjectVersion: number,

  dialog: {
    /** Whether the Save/Load dialog is shown. */
    showSaveLoad: boolean,
    /** Whether the Page Settings dialog is shown. */
    showPageSettings: boolean,
    /** Whether the List Pages dialog is shown. */
    showPagesList: boolean,
  },

  /**
   * Creator mode:
   *
   * `none` – In the menu
   *
   * `create` – Creating the CYOA
   *
   * `preview` – The viewer inside of the ICC2, still has options
   *
   * `view` – What the exported Viewer will use, there will be no other
   *        visual elements than the ones needed
   */
  creatorMode: CreatorMode,

  /**
   * Everything that is stored in the currently loaded project will be
   * stored in the object below
   */
  projectV2: projectV2,
}

export type projectV2 = {
  /** The version number of the project format. Each increment indicates
   * backward-incompatible changes. */
  version: number,

  /** The project settings */
  settings: Settings

  /** The state of the project. */
  state: {
    currentPage: number,
    activatedChoices: Array<Id>,
    allIds: Set<Id>,
  },

  /** The project's styling */
  styling: Styling,

  /** The main content of the CYOA. */
  pages: Array<Page>,
}

/** A generic settings type. */
export type Settings = {
  /** The settings scope. */
  scope: Scope,

  projectSettings: ProjectSettings,

  /** Settings unique to Sections. */
  sectionSettings: SectionSettings,
}

export type ProjectSettings = {
  /** Whether pagination is turned on or not. */
  pagesOn?: boolean,

  /** The defaults of the program. */
  defaults?: {
    /** The default page name. */
    pageName?: string,
    /** The default section title. */
    sectionTitle?: string,
    /** The default section text. */
    sectionText?: string,
    /** The default length of newly generated IDs. */
    idLength?: number,
  },
}

export type SectionSettings = {
  /** Whether only one choice can be selected, or none of them */
  isMultipleChoice?: boolean,
}

/** The styling. */
export type Styling = {
  /** The styling scope. */
  scope?: Scope,
  /** Choices */
  choices?: {
    /** The basic options */
    backgroundColour?: string,
    textColour?: string,

    /** The colour of a choice changing on select. */

    changeBackgroundColourOnSelect?: boolean,
    backgroundColourOnSelect?: string,
    changeTextColourOnSelect?: boolean,
    textColourOnSelect?: string,

    /** The colour of a choice changing on hover. */

    changeBackgroundColourOnHover?: boolean,
    backgroundColourOnHover?: string,
    changeTextColourOnHover?: boolean,
    textColourOnHover?: string,
  }
}

/** The unique identifier of an object. */
export type Id = string;

/**
 * The different scopes for styles, settings, etc.
 *
 * `global` = Across the entire project.
 *
 * `page` – Restricted to the current page.
 *
 * `pageItem` – Restricted to the current page item (sections, dividers, etc).
 *
 * `section` – Restricted to the Section only.
 *
 * `choice` – Restricted to a specific Choice only.
 */
type Scope = "global" | "page" | "pageItem" | "section" | "choice";

export type ObjectType = "page" | "section" | "divider" | "choice";

/** A page in the CYOA. */
export type Page = {
  /** The ID of a page. */
  id: Id,
  /** The type of the page. Used for internal purposes only. */
  type: "page",
  /** The name of the page, used in pagination. */
  pageName: string,
  /** The sections. */
  pageItems: Array<PageItem>,
  /** The settings local to the page. */
  settings?: Settings,
}

/** An item/row that is made of all types of objects */
export type PageItem =
  | Section
  | Divider;

/** A divider */
export type Divider = {
  type: "divider",
  id: Id,
  editModeEnabled: boolean,
  settings: Settings,
};

/** A section in the CYOA. Equivalent to a Row in the first Creator. */
export type Section = {
  /** The type of object. */
  type: "section",
  /** The ID of a section. */
  id: Id,
  /** The title of a section. */
  title: string,
  /** The accompanying text of a section. */
  text: string,
  /** Whether it shows the edit menu or not */
  editModeEnabled: boolean,
  /** The settings that can be changed by the user. */
  settings: Settings,
  /** The choices within a section. */
  choices: Array<Choice>,
}

export type Choice = {
  /** The type of object. */
  type: "choice",
  /** The ID of a choice. */
  id: Id,
  /** The title of a choice. */
  title: string,
  /** The text of a choice. */
  text: string,
  /** The settings of a choice. */
  settings: Settings,
}

/** A navigation item in the sidebar */
export type NavigationItem = {
  name: string;
  icon: string,
  component: Component;
}

/**
 * An array of sidebar navigation items
 *
 * Perhaps too much abstraction?
 */
export type NavigationItems = Array<NavigationItem>;
