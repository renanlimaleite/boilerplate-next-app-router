husky and lint-staged

1. `npm install --save-dev husky lint-staged`
2. `npx husky-init && npm install`
3. Add `npx --no-install lint-staged` in .husky/pre-commit
4. Add .lintstagedrc.js
5. Add this code in .lintstagedrc.js

```javascript
module.exports = {
  // Lint & Prettify TS and JS Files
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `npm run lint --fix . ${filenames.join(' --file')}`
  ]
}
```
