# Google Ads Script Rollup.js Bundler

Simple ready-to go module bundler coming with Babel.js

## Installation
Clone the project and run
```
npm install
```
## Usage


Create `.env` file in the root folder of your project e.g.

```
SECRET_PRODUCTION_CODE=123
SECRET_DEVELOPMENT_CODE=456
```
Configure `@rollup/plugin-replace` to change the value depending on the production environment

```javascript
        replace({
            'process.env.CONFIG': (NODE_ENV === "production") ? JSON.stringify(process.env.SECRET_PRODUCTION_CODE) : JSON.stringify(process.env.SECRET_DEVELOPMENT_CODE),
        })
``` 
In your code use `process.env.CONFIG` to output the value.

For development run 
```bash
npm run build_dev
```
for production run
```bash
npm run build_prod
```
## License
[MIT](https://choosealicense.com/licenses/mit/)