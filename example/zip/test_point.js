/* 
node example/zip/test_point.js
*/
var zip = require('../../src/zip'),
    fs = require('fs');

var pointGeojson = require('../../test/geojson/Point.json');

var zipOptions = {
    types: {
        point: 'point',
    },
};

const base64String = zip(pointGeojson, zipOptions);

fs.writeFile('test_point.shp.zip', base64String, {encoding: 'base64'}, function(err) {
    console.log('File created');
});
