# Usage example

```js
const cdvPromise = require('cordova-promisify')
cdvPromise(resolveLocalFileSystemURL)(cordova.file.dataDirectory)
  .then(dataDir => console.log('Data dir entry', dataDir))
  .catch(err => console.error(err))
````
