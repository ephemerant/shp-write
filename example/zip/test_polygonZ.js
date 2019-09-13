/* 
node example/zip/test_polygonZ.js
*/
var zip = require('../../src/zip'),
    fs = require('fs');

var polygonZGeojson = require('../../test/geojson/PolygonZ.json');

var zipOptions = {
    types: {
        polygonz: 'polygonz',
    },
};

const base64String = zip(polygonZGeojson, zipOptions);

fs.writeFile('test_polygonZ.shp.zip', base64String, {encoding: 'base64'}, function(err) {
    console.log('File created');
});
