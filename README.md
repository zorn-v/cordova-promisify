# Install

`npm i @zorn-v/cordova-promisify`

# Usage example

Use like nodejs `require('util').promisify`

```js
const cdvPromise = require('cordova-promisify')
cdvPromise(resolveLocalFileSystemURL)(cordova.file.dataDirectory)
  .then(dataDir => cdvPromise(dataDir.getFile.bind(dataDir))('file.txt', {create: true}))
  .then(fileEntry => console.log(fileEntry))
  .catch(err => console.error(err))
````
