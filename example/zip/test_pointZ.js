/* 
node example/zip/test_pointZ.js
*/
var zip = require('../../src/zip'),
    fs = require('fs');

var pointZGeojson = require('../../test/geojson/PointZ.json');

var zipOptions = {
    types: {
        pointz: 'pointz',
    },
};

const base64String = zip(pointZGeojson, zipOptions);

fs.writeFile('test_pointZ.shp.zip', base64String, {encoding: 'base64'}, function(err) {
    console.log('File created');
});
