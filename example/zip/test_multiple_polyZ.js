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

const base64String = zip(multiPolygonZGeojson, zipOptions);

fs.writeFile('test_multiple_polyZ.shp.zip', base64String, {encoding: 'base64'}, function(err) {
    console.log('File created');
});
