# Notes
Miscellaneous notes

## Viewer issue
How will I handle the issue of a Viewer?

### Solution #1
Perhaps I can have a Viewer component, and the actual Viewer page slots that
in, with a toolbar thing at the top.

Then, I can somehow specially compile the Viewer, such that its entry point is
the Viewer component, and it automatically loads a `project.json` file.

### Solution #2
Have the Viewer only available from the app, and when the user exports their
project, it does it all in one single `index.html` file (or perhaps multiple
files with them being linked to).

## Path issue when building

https://github.com/vuejs/language-tools/issues/2622#issuecomment-1545577994

In `tsconfig.json` set `composite` to `false` then build. It should show a
normal error now. Fix the error, and set `composite` back to `true`.