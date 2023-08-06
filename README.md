# Interactive CYOA Creator 2
A successor to MeanDelay's Interactive CYOA Creator.

## Comparison with MeanDelay's Creator

* Written in TypeScript rather than JavaScript
* Written using Vue 3 with Composition API rather than Vue 2 with Options API
* Written using Vuetify 3 rather than Vuetify 2
* State managed with Pinia instead of Vuex
* Written using the latest libraries
* Shipped with native Desktop apps (On Windows, Mac OS, and Linux) using Tauri,
  rather than only a web version and a Windows version using Electron
* Open-Source, so anyone can contribute or fork
* As this Creator has yet to reach `v1.0.0`, MeanDelay's Creator has more
  features
* Actively maintained

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
      the development phase, but not when "exporting", where it would minify
      all JSON files
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
- [ ] Requirements can use a custom logic code that is handwritten, for
  advanced users
    - [ ] Maybe inline JavaScript — I'd have to make a guide on how to manually
      interact with Vue variables and check if an option is selected and stuff
        - [ ] Maybe by turning on Javascript it will auto-declare shortcut
          variables to the extremely complicated Vue process, meaning you can
          see if Rows exist using something like `row["fjw6"].exists()` and see
          if a choice is selected by going `choice["lso9"].is_pressed()`.
    - [ ] A custom scripting language
        - [ ] [IntScript](./IntScript.md) is one I'm working on
- [ ] Alerts
    - [ ] Allow certain alerts to be triggered
        - [ ] Can either be a one-off alert triggered when an event happens
          (such as when a Row has its requirements or when a choice is pressed)
          or Choices could have a function where it triggers a preset alert, or
          it could trigger an alert that is changeable
    - [ ] Allow variables to be used inside of alerts
- [ ] Add Dividers
- [ ] Point Bar
    - [ ] It automatically switches on when you create your first Point Type,
      but it can be manually turned off
- [ ] App intensive functions
    - [ ] Might code them in Rust and interop with them using WebAssembly
- [ ] Add a custom menu (https://tauri.app/v1/guides/features/menu) for stuff
  like reloading, existing, and maybe links to the source as well as a tutorial
  for IntScript (if it is ever made)
- [ ] Local point types – Point Types native to a Section or Page that can't be
  used or seen outside of it. Useful for 
    - [ ] Can convert local types into global ones by moving them while
      preserving default value, options, and ID

[fluent-vue]: https://github.com/fluent-vue/fluent-vue
[vue-i18n]: https://kazupon.github.io/vue-i18n/

## Immediate TODO

- [ ] Support for decimals in Point Types, perhaps requiring a different type.
  Whole type vs Decimal type, for example.
    - [ ] Option to switch between native floating point integers, accurate
      (but slow ones), or native + rounding
- [ ] Change Tauri icon to actual web icon
- [ ] Plus sign on the bottom right for adding Rows and Dividers and stuff
- [ ] Change `changelog.json5` file to support arbitrary nesting of list items.
  Perhaps achieve this by using Markdown and converting it on-demand into list
  items
- [ ] Stats for amount of pages, amount of words, amount of sections, amount of
  choices, etc
- [ ] Have the Sidebar permanently extend if, and only if, the screen is
  massive enough (probably more than 1920px)
- [ ] Change Tauri config so that Desktop apps (at least Linux) don't start so
  small. In fact, it would be best if they started maximized.
- [ ] Combined Project Version select with the Save/Load Menu
- [ ] All created IDs are also copied to an array in the store, which will then
  be checked against in case duplicates are made
    - [ ] There will also be an `idLength` number that starts at 4 (can be
      user-configured in the future). If all possible IDs are taken (calculate
      the max by multiplying the amount of characters–hex or alphanumeric
      presumably–with the length, and if the array is over that number, then
      increment the `idLength` by one)

## Issues / Errors

- [ ] About/Information Page on Linux AND Mobile trails off the edge with large
  URLs
- [ ] Fix About page not working with lists properly – overflow?

# Ideas

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

```sh
# Web
yarn dev

# Desktop app
yarn tauri dev
```

### Compiles and minifies for production

```sh
# Web
yarn build

# Desktop app
yarn tauri build

# Build for 64 bit Windows
rustup target add x86_64-pc-windows-msvc
yarn tauri build --target x86_64-pc-windows-msvc
# Build for 32 bit Windows
rustup target add i686-pc-windows-msvc
yarn tauri build --target i686-pc-windows-msvc
# Build for ARM64
# Install `C++ ARM64 build tools` from the `Visual Studio Installer`
rustup target add aarch64-pc-windows-msvc
yarn tauri build --target aarch64-pc-windows-msvc

# Build for Windows on Linux
yay -S nsis
sudo pacman -S lld llvm
rustup target add x86_64-pc-windows-msvc
cargo install xwin
xwin splat --output ~/.xwin
# If that fails with an error message like this:
# Error: failed to splat Microsoft.VC.14.29.16.10.CRT.x64.Desktop.base.vsix
# you can try adding the --disable-symlinks flag to the command:
# xwin splat --output ~/.xwin --disable-symlinks
# ---
# Add this to your project's .cargo/config.toml:
# [target.x86_64-pc-windows-msvc]
# linker = "lld"
# rustflags = [
#   "-Lnative=/home/username/.xwin/crt/lib/x86_64",
#   "-Lnative=/home/username/.xwin/sdk/lib/um/x86_64",
#   "-Lnative=/home/username/.xwin/sdk/lib/ucrt/x86_64"
# ]
# ---
# then:
yarn tauri build --target x86_64-pc-windows-msvc

# Build for Windows on Linux (doesn't work)
sudo pacman -S mingw-w64
sudo apt install mingw-w64
# in ~/.cargo/config write:
# [target.x86_64-pc-windows-gnu]
# linker = "x86_64-w64-mingw32-gcc"
# ar = "x86_64-w64-mingw32-gcc-ar"
rustup target add x86_64-pc-windows-gnu
yarn tauri build --target x86_64-pc-windows-gnu

# Supporting Windows 7: https://tauri.app/v1/guides/building/windows/#supporting-windows-7

# MacOS
# targets Apple silicon machines.
rustup target add aarch64-apple-darwin
yarn tauri build --target aarch64-apple-darwin
# targets Intel-based machines.
rustup target add x86_64-apple-darwin
yarn tauri build --target x86_64-apple-darwin
# produces a universal macOS binary that runs on both Apple silicon and
# Intel-based Macs.
rustup target add universal-apple-darwin
yarn tauri build --target universal-apple-darwin

# Linux

```

Building using GitHub Actions: https://github.com/tauri-apps/tauri-action

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://vitejs.dev/config/).

## Disclaimer
As of writing this and starting the project, I barely know any JavaScript (let
alone TypeScript), CSS, and Vue 3. The fact that it's actually working is a
miracle on its own lol.

If I've made some code that could be done more elegantly and efficiently,
please make a PR and I'll get right on that.
