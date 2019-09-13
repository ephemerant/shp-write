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

const base64String = zip(multiLineStringZGeojson, zipOptions);

fs.writeFile('test_multilinestringZ.shp.zip', base64String, {encoding: 'base64'}, function(err) {
    console.log('File created');
});
