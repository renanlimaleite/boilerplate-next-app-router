module.exports = {
  // Lint & Prettify TS and JS Files
  '*.{js,jsx,ts,tsx}': (filenames) => {
    console.log('Filenames:', filenames)
    return [
      `prettier --write ${filenames.join(' ')}`,
      `npm run lint --fix . ${filenames.join(' --file')}`,
      `npm test -- --findRelatedTests ${filenames.join(' ')}`
    ]
  }
}
