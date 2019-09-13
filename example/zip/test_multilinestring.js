/* 
node example/zip/test_multilinestring.js
*/
var zip = require('../../src/zip'),
    fs = require('fs');

var multiLineStringGeojson = require('../../test/geojson/MultiLineString.json');

var zipOptions = {
    types: {
        polyline: 'multilinestring',
    },
};

const base64String = zip(multiLineStringGeojson, zipOptions);

fs.writeFile('test_multilinestring.shp.zip', base64String, {encoding: 'base64'}, function(err) {
    console.log('File created');
});
