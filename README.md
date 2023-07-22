# Interactive CYOA Creator 2
A successor to MeanDelay's Interactive CYOA Creator.

## Features

- [ ] Backwards compatible with IntCyoaCreator 1's `project.json` files
- [ ] Viewer
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


## Ideas

To work with Global, Row, and Private settings and styling, we could have an
array attached to each object called like "settings" or "styling" or something.
Then, I create a function that will "resolve" a settings or styling, by going
down the list until it reaches the lowest override or up the list until it
encounters its first variable, and then returning that value.

## Project setup

```
# yarn
yarn

# npm
npm install

# pnpm
pnpm install
```

### Compiles and hot-reloads for development

```
# yarn
yarn dev

# npm
npm run dev

# pnpm
pnpm dev
```

### Compiles and minifies for production

```
# yarn
yarn build

# npm
npm run build

# pnpm
pnpm build
```

### Lints and fixes files

```
# yarn
yarn lint

# npm
npm run lint

# pnpm
pnpm lint
```

### Customize configuration

See [Configuration Reference](https://vitejs.dev/config/).
