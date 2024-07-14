# Guides Steps

### Getting Started

- npm init -y
- npm install webpack webpack-cli --save-dev
- package.json
  - remove main entry
  - set private true
- npm install --save lodash
- import lodash into script
- `npx webpack` runs webpack script, looks for src/index.js
- after run command, should view index.html from dist directory in browser to see 'Hello webpack'
- Webpack config -> webpack.config.js
- To run using specific config name, use `npx webpack --config webpack.config.js`
- Usually, add it to npm build script

### Asset Management

- CSS: npm install --save-dev style-loader css-loader
- IMAGES: add
  `{
    test: /\.(png|svg|jpeg|gif)$/i,
    type: 'asset/resource'
}` to webpack config
- FONTS: add fonts regex to module. Incorporate them via @font-face declaration in css file. Add font to src
  run `npm run build`
- Loading Data: `npm imstall --save-dev csv-loader xml-loader`. Once install, update webpack config modeule
  to check for xml for csv and user csv-loader. Import the data into index.js
- Customize parser of JSON modules: npm install toml yamljs json5 --save-dev. Then use to parse
  `{
      test: /\.toml$/i,
      type: 'json',
      parser: {
        parse: toml.parse,
      },`

### Output Management


