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
var multiplePolygonsBugGeojson = require('../../test/geojson/multiplePolygonsZ.json');

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

const lineString = zip(linestringGeojson, zipOptions);
const lineStringZ = zip(linestringZGeojson, zipOptions);
const multiPoint = zip(multiPointGeojson, zipOptions);
const multiPointZ = zip(multiPointZGeojson, zipOptions);
const multiLineString = zip(multiLineStringGeojson, zipOptions);
const multiLineStringZ = zip(multiLineStringZGeojson, zipOptions);
const multiPolygon = zip(multiPolygonGeojson, zipOptions);
const multiPolygonZ = zip(multiPolygonZGeojson, zipOptions);
const point = zip(pointGeojson, zipOptions);
const pointZ = zip(pointZGeojson, zipOptions);
const polygon = zip(polygonGeojson, zipOptions);
const polygonZ = zip(polygonZGeojson, zipOptions);
const multiplePolygonsBugZ = zip(multiplePolygonsBugGeojson, zipOptions);

Promise.all([
  lineString,
  lineStringZ,
  multiPoint,
  multiPointZ,
  multiLineString,
  multiLineStringZ,
  multiPolygon,
  multiPolygonZ,
  point,
  pointZ,
  polygon,
  polygonZ,
  multiplePolygonsBugZ,
]).then(
  ([
    lineStringBase64String,
    lineStringZBase64String,
    multiPointBase64String,
    multiPointZBase64String,
    multiLineStringBase64String,
    multiLineStringZBase64String,
    multiPolygonBase64String,
    multiPolygonZBase64String,
    pointBase64String,
    pointZBase64String,
    polygonBase64String,
    polygonZBase64String,
    multiplePolygonsBugZBase64String,
  ]) => {
    fs.writeFile(
      'LineString.shp.zip',
      lineStringBase64String,
      { encoding: 'base64' },
      function (err) {
        if (err) {
          console.log('Error', err);
        } else {
          console.log('LineString File created');
        }
      },
    );

    fs.writeFile(
      'LineStringZ.shp.zip',
      lineStringZBase64String,
      { encoding: 'base64' },
      function (err) {
        if (err) {
          console.log('Error', err);
        } else {
          console.log('LineStringZ File created');
        }
      },
    );

    fs.writeFile(
      'MultiPoint.shp.zip',
      multiPointBase64String,
      { encoding: 'base64' },
      function (err) {
        if (err) {
          console.log('Error', err);
        } else {
          console.log('MultiPoint File created');
        }
      },
    );

    fs.writeFile(
      'MultiPointZ.shp.zip',
      multiPointZBase64String,
      { encoding: 'base64' },
      function (err) {
        if (err) {
          console.log('Error', err);
        } else {
          console.log('MultiPointZ File created');
        }
      },
    );

    fs.writeFile(
      'MultiLineString.shp.zip',
      multiLineStringBase64String,
      { encoding: 'base64' },
      function (err) {
        if (err) {
          console.log('Error', err);
        } else {
          console.log('MultiLineString File created');
        }
      },
    );

    fs.writeFile(
      'MultiLineStringZ.shp.zip',
      multiLineStringZBase64String,
      { encoding: 'base64' },
      function (err) {
        if (err) {
          console.log('Error', err);
        } else {
          console.log('MultiLineStringZ File created');
        }
      },
    );

    fs.writeFile(
      'MultiPolygon.shp.zip',
      multiPolygonBase64String,
      { encoding: 'base64' },
      function (err) {
        if (err) {
          console.log('Error', err);
        } else {
          console.log('MultiPolygon File created');
        }
      },
    );

    fs.writeFile(
      'MultiPolygonZ.shp.zip',
      multiPolygonZBase64String,
      { encoding: 'base64' },
      function (err) {
        if (err) {
          console.log('Error', err);
        } else {
          console.log('MultiPolygonZ File created');
        }
      },
    );

    fs.writeFile(
      'Point.shp.zip',
      pointBase64String,
      { encoding: 'base64' },
      function (err) {
        if (err) {
          console.log('Error', err);
        } else {
          console.log('Point File created');
        }
      },
    );

    fs.writeFile(
      'PointZ.shp.zip',
      pointZBase64String,
      { encoding: 'base64' },
      function (err) {
        if (err) {
          console.log('Error', err);
        } else {
          console.log('PointZ File created');
        }
      },
    );

    fs.writeFile(
      'Polygon.shp.zip',
      polygonBase64String,
      { encoding: 'base64' },
      function (err) {
        if (err) {
          console.log('Error', err);
        } else {
          console.log('Polygon File created');
        }
      },
    );

    fs.writeFile(
      'PolygonZ.shp.zip',
      polygonZBase64String,
      { encoding: 'base64' },
      function (err) {
        if (err) {
          console.log('Error', err);
        } else {
          console.log('PolygonZ File created');
        }
      },
    );

    fs.writeFile(
      'multiplePolygonsBugZ.shp.zip',
      multiplePolygonsBugZBase64String,
      { encoding: 'base64' },
      function (err) {
        if (err) {
          console.log('Error', err);
        } else {
          console.log('multiplePolygonsBugZ File created');
        }
      },
    );
  },
);
