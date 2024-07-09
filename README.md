#### Steps

- npm init -y
- npm install webpack webpack-cli --save-dev
- package.json 
    - remove main entry
    - set private true
- npm install --save lodash
- import lodash into script
- `npx webpack` runs webpack script, looks for src/index.js
- after run command, should view index.html from dist directory in browser to see 'Hello webpack'
