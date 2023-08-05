# Notes
Miscellaneous notes

## Path issue when building

https://github.com/vuejs/language-tools/issues/2622#issuecomment-1545577994

In `tsconfig.json` set `composite` to `false` then build. It should show a
normal error now. Fix the error, and set `composite` back to `true`.