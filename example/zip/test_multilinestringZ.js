/*
node example/zip/test_multilinestringZ.js
*/
// ! broken
var zip = require('../../src/zip'),
    fs = require('fs');

var multiLineStringZGeojson = require('../../test/geojson/MultiLineStringZ.json');

var zipOptions = {
    types: {
        polylinez: 'multilinestringz',
    },
};

zip(multiLineStringZGeojson, zipOptions).then(base64String => {
  fs.writeFile('test_multilinestringZ.shp.zip', base64String, {encoding: 'base64'}, function(err) {
    if (err) {
      console.log('Error', err);
    } else {
      console.log('File created');
    }
  });
});
