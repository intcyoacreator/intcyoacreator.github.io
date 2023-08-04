# Interactive CYOA Creator 2
A successor to MeanDelay's Interactive CYOA Creator.

## Features

- [ ] Backwards compatible with IntCyoaCreator 1's `project.json` files
- [ ] Viewer
    - [ ] View projects from file
    - [ ] View projects from URL
    - [ ] View projects from cloud storage
        - [ ] Google Drive
        - [ ] DropBox
        - [ ] OneDrive
- [ ] Creator
    - [ ] Settings
- [ ] About
    - [ ] Information / FAQ
        - [ ] What is a CYOA? etc
    - [ ] Help
        - [ ] How to upload online
    - [ ] Changelog

## TODO

- [ ] Image galleries (`v-window`)
    - [ ] A pseudo-row that serves as a gallery of images (but distinct from a
      Row, unless it's v1, in which case it allows only one image and is, in
      actuality, a Row with an image)
    - [ ] Allow uploading multiple images to Choices (not backwards-compatible)
        - [ ] Choices with the `project_v2.json` format (tentative name) will
          have the Base64 image(s) or URL stored in an array, even if there is
          only one of them
- [ ] DnD style skill check with it setting a variable to true if it succeeds,
  and false otherwise
    - [ ] Option to make it roll only once
- [ ] Aspect ratios
    - [ ] Can crop just like Version 1, but can also find a way to 
- [ ] Lazy loading option in the Settings
- [ ] Project Formats
    - List of formats (asks which one to choose on load and saving for the
      first time):
        - [ ] Project v1 – Backwards-compatible Interactive CYOA Creator 1
          files. ICC2 cannot use new features with this
        - [ ] Project v1.1 – Backwards-compatible Interactive CYOA Creator 1
          and 2 files. ICC2 can use new features with this.
        - [ ] Project v2 (Recommended) – New file formats native to this
          Creator only
    - [ ] Option to upgrade versions (but never backwards, destructive action)
    - [ ] Validates which version it is using somehow, auto-detecting it
        - [ ] v1.1 and v2 can have a special "version" metadata tag
    - [ ] Project v1.1 and above should use JSON5. Comments would be used in
      the development phase, but when "exporting"
- [ ] Export menu
    - [ ] Different from ICC1 in that exporting doesn't always separate images,
      though that is an option in this menu. Instead it does a lot of other
      optimizations, such as minifying and sanitizing comments in the
      `project.json5`
- [ ] Sub-choices
    * Like Choices within Choices
    * Perhaps limit this to prevent arbitrary nesting
- [ ] Custom Pop-ups / Alerts
- [ ] Inline Markdown formatting
    - [ ] Option in Settings to turn use Markdown or HTML
        * Markdown on by default (with a rich text editor)
        * Can turn into HTML
        * Can change what is filtered
- [ ] A rich text editor that displays Markdown
- [ ] Style Templates
    - [ ] Gallery of pre-built templates with image previews
        * Look at common CSS Frameworks and try to emulate some of them
          (crediting them by using their name of course), such as sakura
    - [ ] Allow designing your own templates that can be saved as separate
      files and shared to other people
- [ ] Native static background support
- [ ] Add "Saves", which are stored in cookies or something, so that users can
  come back to the same website and load their previous builds
    * Based on Twine
    - [ ] Save
    - [ ] Load
    - [ ] Restart option
- [ ] Images
    - [ ] Add ability to use an Image that was previously uploaded to the
      project. This helps with saving space, and in the backend just points to
      the same file (or web address, though it doesn't matter even matter if
      it's a URL)
    - [ ] Upload images
    - [ ] Use URLs
        - [ ] Option to "fetch" all images from external URLs, save them under
          a `URL` directory, rename them according to their internal name, and
          changing the URLs used for each applicable object to the local file
          instead.
- [ ] Time
    - [ ] Allow setting how many seconds a Row appears, setting could be used
      in Transitions
- [ ] Transitions
    - [ ] Allow transitions when using Paginated mode
- [ ] Can set layout type from "continuous" (ICCv1 default), "tabbed" (native
  support for a tabs menu), and "paginated" (with pages).
- [ ] Sidebar which can be used to set up a custom navigation in Settings, 
- [ ] Calendar pick option
    - [ ] User can set the start date it shows
- [ ] Password protect `project.json` files for development purposes (so that
  you don't leak what you're working on but still want to host it in the cloud)
    * Recommend to the user that you separate images instead of having them be
      inline
        * Caveat that the images can be viewed, but if they are internal then
          the project.json file grows larger
- [ ] Navigation menu on right-hand side, off by default but can be toggled on
    * Option to list either all Rows or only Rows that are shown
- [ ] Use "Sections" instead of "Rows" – More intuitive
- [ ] Header Section that displays the title of your project in h1 or an image
  representing it (like a logo)
    * And actual Sections will use h2 by default
- [ ] Dedicated Info/About page in Viewer – It would appear (by default) as an
  information button in the top right. Pressing it it would allow you to see:
    1. Changelog
    2. Authors
    3. Contributors / extra thanks
    4. Image credits – Can be auto-generated from Image user-inputted metadata,
       which includes original author and artwork link
    5. Version number
- [ ] Choices list
- [ ] Sections list
- [ ] Link to another choice
- [ ] Requirements can link to another choice, opening up any tabs and/or going
  to its page to allow you to select it
    - [ ] Back button appears
- [ ] Custom tags to reference another choice or section
- [ ] Custom tags to display values (scores, etc)
- [ ] Ability to embed music in the background, most browser don't allow
  autoplay though
- [ ] Classic CYOA style (choosing choices and progressing through a story,
  perhaps even looping at certain points until a condition is finished)
- [ ] Internationalization using [fluent-vue] or [vue-i18n]
    - [ ] Mandarin Chinese
    - [ ] Spanish
    - [x] English
    <!-- - [ ] Hindi -->
    - [ ] Portuguese
    <!-- - [ ] Bengali -->
    - [ ] Russian
    - [ ] Japanese
    <!-- - [ ] Yue Chinese -->
    <!-- - [ ] Vietnamese -->
    - [ ] French
    - [ ] Modern Standard Arabic
    - [ ] Standard German
    - [ ] Italian
    - [ ] Esperanto
    - [ ] Ido

[fluent-vue]: https://github.com/fluent-vue/fluent-vue
[vue-i18n]: https://kazupon.github.io/vue-i18n/

## Ideas

To work with Global, Row, and Private settings and styling, we could have an
array attached to each object called like "settings" or "styling" or something.
Then, I create a function that will "resolve" a settings or styling, by going
down the list until it reaches the lowest override or up the list until it
encounters its first variable, and then returning that value.

### Frameworks and stuff

* JS Framework
    * Vue
        * Vuetify
        * Quasar
    * SvelteKit – Supposedly faster and lighter than Vue
* CSS Framework – If not using a Vue component framework
    * TailwindCSS
        * DaisyUI

## Project setup

```
yarn
```

### Compiles and hot-reloads for development

```
yarn dev
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://vitejs.dev/config/).
