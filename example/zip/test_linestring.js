/* 
node example/zip/test_linestring.js
*/
var zip = require('../../src/zip'),
    fs = require('fs');

var linestringGeojson = require('../../test/geojson/LineString.json');

var zipOptions = {
    types: {
        polyline: 'polyline',
    },
};

const base64String = zip(linestringGeojson, zipOptions);

fs.writeFile('test_linestring.shp.zip', base64String, {encoding: 'base64'}, function(err) {
    console.log('File created');
});

