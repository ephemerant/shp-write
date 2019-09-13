/* 
node example/zip/test_zip.js
*/
// this could be simplified
var zip = require('../../src/zip'),
    fs = require('fs');

var linestringGeojson = require('../../test/geojson/LineString.json');
var linestringZGeojson = require('../../test/geojson/LineStringZ.json');
var multiPointGeojson = require('../../test/geojson/MultiPoint.json');
var multiPointZGeojson = require('../../test/geojson/MultiPointZ.json');
var multiLineStringGeojson = require('../../test/geojson/MultiLineString.json');
var multiLineStringZGeojson = require('../../test/geojson/MultiLineStringZ.json');
var multiPolygonGeojson = require('../../test/geojson/MultiPolygon.json');
var multiPolygonZGeojson = require('../../test/geojson/MultiPolygonZ.json');
var pointGeojson = require('../../test/geojson/Point.json');
var pointZGeojson = require('../../test/geojson/PointZ.json');
var polygonGeojson = require('../../test/geojson/Polygon.json');
var polygonZGeojson = require('../../test/geojson/PolygonZ.json');

var zipOptions = {
    types: {
        point: 'point',
        pointz: 'pointz',
        polyline: 'polyline',
        polylinez: 'polylinez',
        polygon: 'polygon',
        polygonz: 'polygonz',
    },
};

const lineStringBase64String = zip(linestringGeojson, zipOptions);
const lineStringZBase64String = zip(linestringZGeojson, zipOptions);
const multiPointBase64String = zip(multiPointGeojson, zipOptions);
const multiPointZBase64String = zip(multiPointZGeojson, zipOptions);
const multiLineStringBase64String = zip(multiLineStringGeojson, zipOptions);
const multiLineStringZBase64String = zip(multiLineStringZGeojson, zipOptions);
const multiPolygonBase64String = zip(multiPolygonGeojson, zipOptions);
const multiPolygonZBase64String = zip(multiPolygonZGeojson, zipOptions);
const pointBase64String = zip(pointGeojson, zipOptions);
const pointZBase64String = zip(pointZGeojson, zipOptions);
const polygonBase64String = zip(polygonGeojson, zipOptions);
const polygonZBase64String = zip(polygonZGeojson, zipOptions);

fs.writeFile('LineString.shp.zip', lineStringBase64String, {encoding: 'base64'}, function(err) {
    console.log('LineString File created');
});

fs.writeFile('LineStringZ.shp.zip', lineStringZBase64String, {encoding: 'base64'}, function(err) {
    console.log('LineStringZ File created');
});

fs.writeFile('MultiPoint.shp.zip', multiPointBase64String, {encoding: 'base64'}, function(err) {
    console.log('MultiPoint File created');
});

fs.writeFile('MultiPointZ.shp.zip', multiPointZBase64String, {encoding: 'base64'}, function(err) {
    console.log('MultiPointZ File created');
});

fs.writeFile('MultiLineString.shp.zip', multiLineStringBase64String, {encoding: 'base64'}, function(err) {
    console.log('MultiLineString File created');
});

fs.writeFile('MultiLineStringZ.shp.zip', multiLineStringZBase64String, {encoding: 'base64'}, function(err) {
    console.log('MultiLineStringZ File created');
});

fs.writeFile('MultiPolygon.shp.zip', multiPolygonBase64String, {encoding: 'base64'}, function(err) {
    console.log('MultiPolygon File created');
});

fs.writeFile('MultiPolygonZ.shp.zip', multiPolygonZBase64String, {encoding: 'base64'}, function(err) {
    console.log('MultiPolygonZ File created');
});

fs.writeFile('Point.shp.zip', pointBase64String, {encoding: 'base64'}, function(err) {
    console.log('Point File created');
});

fs.writeFile('PointZ.shp.zip', pointZBase64String, {encoding: 'base64'}, function(err) {
    console.log('PointZ File created');
});

fs.writeFile('Polygon.shp.zip', polygonBase64String, {encoding: 'base64'}, function(err) {
    console.log('Polygon File created');
});

fs.writeFile('PolygonZ.shp.zip', polygonZBase64String, {encoding: 'base64'}, function(err) {
    console.log('PolygonZ File created');
});
