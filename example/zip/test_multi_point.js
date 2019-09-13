/* 
node example/zip/test_multi_point.js
*/
var zip = require('../../src/zip'),
    fs = require('fs');

var multiPointGeojson = require('../../test/geojson/MultiPoint.json');

var zipOptions = {
    types: {
        point: 'point',
    },
};

const base64String = zip(multiPointGeojson, zipOptions);

fs.writeFile('test_multi_point.shp.zip', base64String, {encoding: 'base64'}, function(err) {
    console.log('File created');
});
