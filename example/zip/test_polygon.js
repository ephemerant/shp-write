/* 
node example/zip/test_polygon.js
*/
var zip = require('../../src/zip'),
    fs = require('fs');

var polygonGeojson = require('../../test/geojson/Polygon.json');

var zipOptions = {
    types: {
        polygon: 'polygon',
    },
};

const base64String = zip(polygonGeojson, zipOptions);

fs.writeFile('test_polygon.shp.zip', base64String, {encoding: 'base64'}, function(err) {
    console.log('File created');
});
