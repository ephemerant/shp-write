/* 
node example/zip/test_multi_pointZ.js
*/
// ! broken
var zip = require('../../src/zip'),
    fs = require('fs');

var multiPointZGeojson = require('../../test/geojson/MultiPointZ.json');

var zipOptions = {
    types: {
        pointz: 'pointz',
    },
};

const base64String = zip(multiPointZGeojson, zipOptions);

fs.writeFile('test_multi_pointZ.shp.zip', base64String, {encoding: 'base64'}, function(err) {
    console.log('File created');
});
