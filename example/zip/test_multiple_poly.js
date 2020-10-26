/*
node example/zip/test_multiple_poly.js
*/
var zip = require('../../src/zip'),
    fs = require('fs');

var multiPolygonGeojson = require('../../test/geojson/MultiPolygon.json');

var zipOptions = {
    types: {
        polygon: 'polygon',
    },
};

zip(multiPolygonGeojson, zipOptions).then(base64String => {
  fs.writeFile('test_multiple_poly.shp.zip', base64String, {encoding: 'base64'}, function(err) {
    if (err) {
      console.log('Error', err);
    } else {
      console.log('File created');
    }
  });
});
