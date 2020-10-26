/*
node example/zip/test_multiplePolygonsBugZ.js
*/
var zip = require('../../src/zip'),
  fs = require('fs');

var multiplePolygonsBugGeojson = require('../../test/geojson/multiplePolygonsZ.json');

var zipOptions = {
  types: {
    polygonz: 'polygonz',
  },
};

zip(multiplePolygonsBugGeojson, zipOptions).then((base64String) => {
  fs.writeFile(
    'test_multiplePolygonsBugZ.shp.zip',
    base64String,
    { encoding: 'base64' },
    function (err) {
      if (err) {
        console.log('Error', err);
      } else {
        console.log('File created');
      }
    },
  );
});
