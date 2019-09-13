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

const base64String = zip(multiPolygonGeojson, zipOptions);

fs.writeFile('test_multiple_poly.shp.zip', base64String, {encoding: 'base64'}, function(err) {
    console.log('File created');
});
