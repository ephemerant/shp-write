/* 
node example/zip/test_linestringZ.js
*/
var zip = require('../../src/zip'),
    fs = require('fs');

var linestringZGeojson = require('../../test/geojson/LineStringZ.json');

var zipOptions = {
    types: {
        polylinez: 'polylinez',
    },
};

const base64String = zip(linestringZGeojson, zipOptions);

fs.writeFile('test_linestringZ.shp.zip', base64String, {encoding: 'base64'}, function(err) {
    console.log('File created');
});
