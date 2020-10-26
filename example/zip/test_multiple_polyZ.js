/*
node example/zip/test_multiple_polyZ.js
*/
// ! broken
var zip = require('../../src/zip'),
    fs = require('fs');

var multiPolygonZGeojson = require('../../test/geojson/MultiPolygonZ.json');

var zipOptions = {
    types: {
        polygonz: 'polygonz',
    },
};

zip(multiPolygonZGeojson, zipOptions).then(base64String => {
  fs.writeFile('test_multiple_polyZ.shp.zip', base64String, {encoding: 'base64'}, function(err) {
    if (err) {
      console.log('Error', err);
    } else {
      console.log('File created');
    }
  });
});
