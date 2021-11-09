# icon-font-generator
This repository generates icon fonts for [core-template](https://github.com/shift72/core-template) using the [fantasticon](https://www.npmjs.com/package/fantasticon) npm package. The necessary files are copied into core-template automatically and will override any fonts and css that already exist. The file paths for the generated files can be found in `.fantasticonrc.js`

You can view the icons by going to domainname/icons.html

### Setup
1. Clone this repo into the same parent directory as core-template.
2. `npm i` inside the icon-font-generator directory.
### Generating Fonts
1. Add SVG icons to the `src` folder. Icons must be 24px by 24px.
2. `npm run create-icons`.
3. In core-template, open `site/icons.html.jet`.
4. Change the stylesheet link to point to the styles folder `<link rel="stylesheet" href="/styles/icons.css" />`
