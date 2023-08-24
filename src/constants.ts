import { Divider, Page, Section, Styling, projectV2 } from "@/types";

export const defaultStyling: Styling = {
  scope: "global",
  choices: {
    changeBackgroundColourOnSelect: true,
    backgroundColourOnSelect: "#CFFAA7", // tea green

    /** Features turned off by default */

    changeTextColourOnSelect: false,
    changeBackgroundColourOnHover: false,
    changeTextColourOnHover: false,
  },
};

/**
 * The default project file for a Project V2 file
 */
export const emptyProjectV2: projectV2 = {
  // Project Version
  version: 2,
  settings: {
    scope: "global",

    // Whether pagination is turned on
    pagesOn: false,

    defaults: {
      pageName: "Page",
      sectionTitle: "Section",
      sectionText: `This is a section, and inside of it you can place
choices.
\n\n
On both Sections and Choices, Requirements can be placed, which will block a
Section from being shown or make the player unable to select a choice,
respectively.`,
    }
  },
  state: {
    currentPage: 1,
    // All activated choices
    activatedChoices: [],
    allIds: new Set(),
  },
  styling: defaultStyling,
  pages: [
    // The default first page
    {
      id: "main",
      pageName: "CYOA",
      pageItems: [],
    },
  ],
};

export const sampleProjectV2: projectV2 = {
  // Project Version
  version: 2,
  settings: {
    scope: "global",
    // Whether pagination is turned on
    pagesOn: false,
    defaults: {
      pageName: "Page",
      sectionTitle: "Section",
      sectionText: "This is a section, and inside of it you can place choices.\
  \
  On both Sections and Choices, Requirements can be placed, which will block a\
  Section from being shown or make the player unable to select a choice,\
  respectively.",
    },
  },
  state: {
    currentPage: 1,
    // All activated choices
    activatedChoices: [],
    allIds: new Set(),
  },
  styling: defaultStyling,
  pages: [
    // The default first page
    {
      id: "main",
      pageName: "CYOA",
      pageItems: [
        {
          type: "section",
          id: "row1",
          title: "First Row",
          text: "This is my first Row",
          editModeEnabled: false,
          choices: [],
        },
        {
          type: "divider",
          id: "9f7s",
          editModeEnabled: false,
        },
        {
          type: "section",
          id: "row3",
          title: "Perks",
          text: "Pick any Perks you would like.",
          editModeEnabled: false,
          choices: [
            {
              id: "sk92",
              title: "Forever Memory",
              text: `You now have perfect memory. You will never forget a
memory. This works retroactively too.`,
            },
            {
              id: "k9f2",
              title: "Body of Atlas",
              text: `You have unlimited stamina. You can lift up to 50 million
times more than a regular human.`
            },
            {
              id: "09r2",
              title: "Avalon",
              text: `Your body's healing is greater than anyone before you.
You regenerate nigh-instantly.`
            }
          ],
        },
      ],
    },
    // Second page:
    {
      id: "second",
      pageName: "Second page",
      pageItems: [
        {
          type: "section",
          id: "row2",
          title: "Second row",
          text: "This is my second row. Teehee!",
          editModeEnabled: false,
          choices: [],
        }
      ],
    }
  ],
};

/** The default section */
export const defaultSection: Section = {
  type: "section",
  /** To be changed after the fact */
  id: "",
  /**
   * To be changed after the fact, and according to the defaults set by the
   * user
   * */
  title: "",
  text: "",
  editModeEnabled: false,
  choices: [],
};

/** The default page */
export const defaultPage: Page = {
  id: "",
  pageName: "",
  pageItems: [],
};

/** The default divider */
export const defaultDivider: Divider = {
  type: "divider",
  id: "",
  editModeEnabled: false,
};

/**
 * The default project file for a Project V1 file
 */
// export const defaultProjectV1 = {
//   "isEditModeOnAll": true,
//   "isStyleOpen": false,
//   "isPointsOpen": false,
//   "isChoicesOpen": false,
//   "isDesignOpen": false,
//   "isViewerVersion": false,
//   "backpack": [],
//   "words": [],
//   "groups": [],
//   /**
//    * Chapters? Not sure
//    */
//   "chapters": [],
//   "activated": [],
//   "rows": [],
//   "pointTypes": [],
//   "variables": [],
//   /**
//    * Rows/Sections
//    */
//   "defaultRowTitle": "Row",
// eslint-disable-next-line max-len
//   "defaultRowText": "This is a row, and inside of it, you can place choices. On both rows and choices Requirements can be placed, which will block a row from being viewed, or make the player unable to select a choice, depending on either Point-types or the Ids of other choices. Point-types can be made in Features then Manage Points. Hovering over buttons will explain what they do. The Design of the project can be changed in 'Modify Design' at the side navigation bar, and private styling for each row can be turned on in the rows Settings. Default text like this can be turned off in Features -> Manage Defaults.",
//   "defaultChoiceTitle": "Choice",
// eslint-disable-next-line max-len
//   "defaultChoiceText": "This is a Choice, and inside of it, you can place images and text. Scores can be added to it, and have Point-types attached. Addons can be added underneath the image and text. In the Functions at the bottom of the choice, there is an array of different things that can be done. Default text like this can be turned off in Features then Manage Defaults.",
//   "defaultBeforePoint": "Cost:",
//   "defaultAfterPoint": "points",
//   "defaultBeforeReq": "Required:",
//   "defaultAfterReq": "choice",
//   "defaultAddonTitle": "Addon",
// eslint-disable-next-line max-len
//   "defaultAddonText": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//   "styling": {
//     "rowTitle": "Times New Roman",
//     "rowText": "Times New Roman",
//     "objectTitle": "Times New Roman",
//     "objectText": "Times New Roman",
//     "addonTitle": "Times New Roman",
//     "addonText": "Times New Roman",
//     "scoreText": "Times New Roman",
//     "rowTitleTextSize": 200,
//     "rowTextTextSize": 100,
//     "objectTitleTextSize": 200,
//     "objectTextTextSize": 100,
//     "addonTitleTextSize": 200,
//     "addonTextTextSize": 100,
//     "scoreTextSize": 75,
//     "barTextColor": "#000000",
//     "barBackgroundColor": "#FFFFFFFF",
//     "barTextPadding": 17,
//     "barTextMargin": 0,
//     "barTextFont": "Times New Roman",
//     "barTextSize": 15,
//     "barPadding": 0,
//     "barMargin": 0,
//     "rowTitleColor": "000000",
//     "rowTextColor": "000000",
//     "objectTitleColor": "000000",
//     "objectTextColor": "000000",
//     "addonTitleColor": "000000",
//     "addonTextColor": "000000",
//     "scoreTextColor": "000000",
//     "objectHeight": true,
//     "rowTitleAlign": "center",
//     "rowTextAlign": "center",
//     "objectTitleAlign": "center",
//     "objectTextAlign": "center",
//     "addonTitleAlign": "center",
//     "addonTextAlign": "center",
//     "scoreTextAlign": "center",
//     "rowButtonXPadding": 0,
//     "rowButtonYPadding": 0,
//     "backgroundImage": "",
//     "rowBackgroundImage": "",
//     "objectBackgroundImage": "",
//     "backgroundColor": "#FFFFFFFF",
//     "objectBgColor": "#FFFFFFFF",
//     "rowBgColor": "#FFFFFFFF",
//     "rowBgColorIsOn": false,
//     "objectBgColorIsOn": false,
//     "objectImageWidth": 100,
//     "rowImageWidth": 100,
//     "objectImageMarginTop": 0,
//     "objectImageMarginBottom": 0,
//     "rowImageMarginTop": 0,
//     "objectMargin": 10,
//     "rowMargin": 10,
//     "rowTextPaddingY": 5,
//     "rowTextPaddingX": 10,
//     "objectTextPadding": 10,
//     "rowBodyMarginTop": 25,
//     "rowBodyMarginBottom": 25,
//     "rowBodyMarginSides": 1,
//     "objectDropShadowH": 0,
//     "objectDropShadowV": 0,
//     "objectDropShadowSpread": 0,
//     "objectDropShadowBlur": 0,
//     "objectDropShadowColor": "grey",
//     "objectDropShadowIsOn": false,
//     "rowDropShadowH": 0,
//     "rowDropShadowV": 0,
//     "rowDropShadowSpread": 0,
//     "rowDropShadowBlur": 0,
//     "rowDropShadowColor": "grey",
//     "rowDropShadowIsOn": false,
//     "selFilterBlurIsOn": false,
//     "selFilterBlur": 0,
//     "selFilterBrightIsOn": false,
//     "selFilterBright": 100,
//     "selFilterContIsOn": false,
//     "selFilterCont": 100,
//     "selFilterGrayIsOn": false,
//     "selFilterGray": 0,
//     "selFilterHueIsOn": false,
//     "selFilterHue": 0,
//     "selFilterInvertIsOn": false,
//     "selFilterInvert": 0,
//     "selFilterOpacIsOn": false,
//     "selFilterOpac": 100,
//     "selFilterSaturIsOn": false,
//     "selFilterSatur": 1,
//     "selFilterSepiaIsOn": false,
//     "selFilterSepia": 0,
//     "selBgColorIsOn": true,
//     "selFilterBgColor": "#70FF7EFF",
//     "reqFilterBlurIsOn": false,
//     "reqFilterBlur": 0,
//     "reqFilterBrightIsOn": false,
//     "reqFilterBright": 100,
//     "reqFilterContIsOn": false,
//     "reqFilterCont": 100,
//     "reqFilterGrayIsOn": false,
//     "reqFilterGray": 0,
//     "reqFilterHueIsOn": false,
//     "reqFilterHue": 0,
//     "reqFilterInvertIsOn": false,
//     "reqFilterInvert": 0,
//     "reqFilterOpacIsOn": true,
//     "reqFilterOpac": 50,
//     "reqFilterSaturIsOn": false,
//     "reqFilterSatur": 1,
//     "reqFilterSepiaIsOn": false,
//     "reqFilterSepia": 0,
//     "reqBgColorIsOn": false,
//     "reqFilterBgColor": "#FFFFFFFF",
//     "reqFilterVisibleIsOn": false,
//     "rowBorderRadiusTopLeft": 0,
//     "rowBorderRadiusTopRight": 0,
//     "rowBorderRadiusBottomRight": 0,
//     "rowBorderRadiusBottomLeft": 0,
//     "rowBorderRadiusIsPixels": true,
//     "rowOverflowIsOn": true,
//     "rowBorderIsOn": false,
//     "rowBorderColor": "red",
//     "rowBorderStyle": "solid",
//     "rowBorderWidth": 2,
//     "objectBorderRadiusTopLeft": 0,
//     "objectBorderRadiusTopRight": 0,
//     "objectBorderRadiusBottomRight": 0,
//     "objectBorderRadiusBottomLeft": 0,
//     "objectBorderRadiusIsPixels": true,
//     "objectOverflowIsOn": true,
//     "objectBorderIsOn": false,
//     "objectBorderColor": "red",
//     "objectBorderStyle": "solid",
//     "objectBorderWidth": 2,
//     "objectImgBorderRadiusTopLeft": 0,
//     "objectImgBorderRadiusTopRight": 0,
//     "objectImgBorderRadiusBottomRight": 0,
//     "objectImgBorderRadiusBottomLeft": 0,
//     "objectImgBorderRadiusIsPixels": true,
//     "objectImgBorderIsOn": false,
//     "objectImgBorderColor": "red",
//     "objectImgBorderStyle": "solid",
//     "objectImgBorderWidth": 2,
//     "rowImgBorderRadiusTopLeft": 0,
//     "rowImgBorderRadiusTopRight": 0,
//     "rowImgBorderRadiusBottomRight": 0,
//     "rowImgBorderRadiusBottomLeft": 0,
//     "rowImgBorderRadiusIsPixels": true,
//     "rowImgBorderIsOn": false,
//     "rowImgBorderColor": "red",
//     "rowImgBorderStyle": "solid",
//     "rowImgBorderWidth": 2,
//     "backPackWidth": 1200
//   }
// };
