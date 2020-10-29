/*
node example/zip/zip.js
*/
// this could be simplified
var zip = require('../../src/zip'),
  fs = require('fs');

var linestring2dMultipleGeojson = require('../../test/geojson/LineString-2d-multiple.json');
var linestring2dsingleGeojson = require('../../test/geojson/LineString-2d-single.json');
var linestring3dMultipleGeojson = require('../../test/geojson/LineString-3d-multiple.json');
var linestring3dsingleGeojson = require('../../test/geojson/LineString-3d-single.json');

var multiLineString2dMultipleGeojson = require('../../test/geojson/MultiLineString-2d-multiple.json');
var multiLineString3dMultipleGeojson = require('../../test/geojson/MultiLineString-3d-multiple.json');

// var multiPoint2dSingleGeojson = require('../../test/geojson/MultiPoint-2d-single.json');
// var multiPoint3dSingleGeojson = require('../../test/geojson/MultiPoint-3d-single.json');

// var multiPolygon2dSingleGeojson = require('../../test/geojson/MultiPolygon-2d-single.json');
// var multiPolygon3dSingleGeojson = require('../../test/geojson/MultiPolygon-3d-single.json');

var point2dSingleGeojson = require('../../test/geojson/Point-2d-single.json');
var point3dMultipleGeojson = require('../../test/geojson/Point-3d-single.json');
var point3dSingleGeojson = require('../../test/geojson/Point-3d-multiple.json');

var polygon2dMultipleRingsGeojson = require('../../test/geojson/Polygon-2d-multiple-rings.json');
var polygon2dMultipleGeojson = require('../../test/geojson/Polygon-2d-multiple.json');
var polygon2dSingleGeojson = require('../../test/geojson/Polygon-2d-single.json');
var polygon3dMultipleGeojson = require('../../test/geojson/Polygon-3d-multiple.json');
var polygon3dSingleGeojson = require('../../test/geojson/Polygon-3d-single.json');

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

const linestring2dMultiple = zip(linestring2dMultipleGeojson, zipOptions);
const linestring2dsingle = zip(linestring2dsingleGeojson, zipOptions);
const linestring3dMultiple = zip(linestring3dMultipleGeojson, zipOptions);
const linestring3dsingle = zip(linestring3dsingleGeojson, zipOptions);

const multiLineString2dMultiple = zip(multiLineString2dMultipleGeojson, zipOptions);
const multiLineString3dMultiple = zip(multiLineString3dMultipleGeojson, zipOptions);

// const multiPoint2dSingle = zip(multiPoint2dSingleGeojson, zipOptions);
// const multiPoint3dSingle = zip(multiPoint3dSingleGeojson, zipOptions);

// const multiPolygon2dSingle = zip(multiPolygon2dSingleGeojson, zipOptions);
// const multiPolygon3dSingle = zip(multiPolygon3dSingleGeojson, zipOptions);

const point2dSingle = zip(point2dSingleGeojson, zipOptions);
const point3dMultiple = zip(point3dMultipleGeojson, zipOptions);
const point3dSingle = zip(point3dSingleGeojson, zipOptions);

const polygon2dMultipleRings = zip(polygon2dMultipleRingsGeojson, zipOptions);
const polygon2dMultiple = zip(polygon2dMultipleGeojson, zipOptions);
const polygon2dSingle = zip(polygon2dSingleGeojson, zipOptions);
const polygon3dMultiple = zip(polygon3dMultipleGeojson, zipOptions);
const polygon3dSingle = zip(polygon3dSingleGeojson, zipOptions);

Promise.all([
    linestring2dMultiple,
    linestring2dsingle,
    linestring3dMultiple,
    linestring3dsingle,
    multiLineString2dMultiple,
    multiLineString3dMultiple,
    // multiPoint2dSingle,
    // multiPoint3dSingle,
    // multiPolygon2dSingle,
    // multiPolygon3dSingle,
    point2dSingle,
    point3dMultiple,
    point3dSingle,
    polygon2dMultipleRings,
    polygon2dMultiple,
    polygon2dSingle,
    polygon3dMultiple,
    polygon3dSingle,
]).then(
  ([
    linestring2dMultipleString,
    linestring2dsingleString,
    linestring3dMultipleString,
    linestring3dsingleString,
    multiLineString2dMultipleString,
    multiLineString3dMultipleString,
    // multiPoint2dSingleString,
    // multiPoint3dSingleString,
    // multiPolygon2dSingleString,
    // multiPolygon3dSingleString,
    point2dSingleString,
    point3dMultipleString,
    point3dSingleString,
    polygon2dMultipleRingsString,
    polygon2dMultipleString,
    polygon2dSingleString,
    polygon3dMultipleString,
    polygon3dSingleString,
  ]) => {
      // TODO: finish renamin
    fs.writeFile(
      'LineString2dMultiple.shp.zip',
      linestring2dMultipleString,
      { encoding: 'base64' },
      function (err) {
        if (err) {
          console.log('Error', err);
        } else {
          console.log('LineString2dMultiple File created');
        }
      },
    );

    fs.writeFile(
      'LineString2dSingle.shp.zip',
      linestring2dsingleString,
      { encoding: 'base64' },
      function (err) {
        if (err) {
          console.log('Error', err);
        } else {
          console.log('LineString2dSingle File created');
        }
      },
    );

    fs.writeFile(
        'linestring3dMultipleString.shp.zip',
        linestring3dMultipleString,
        { encoding: 'base64' },
        function (err) {
          if (err) {
            console.log('Error', err);
          } else {
            console.log('linestring3dMultipleString File created');
          }
        },
      );

      fs.writeFile(
        'linestring3dSingleString.shp.zip',
        linestring3dsingleString,
        { encoding: 'base64' },
        function (err) {
          if (err) {
            console.log('Error', err);
          } else {
            console.log('linestring3dSingleString File created');
          }
        },
      );

      fs.writeFile(
        'MultiLineString2dMultiple.shp.zip',
        multiLineString2dMultipleString,
        { encoding: 'base64' },
        function (err) {
          if (err) {
            console.log('Error', err);
          } else {
            console.log('MultiLineString2dMultiple File created');
          }
        },
      );

      fs.writeFile(
        'MultiLineString3dMultiple.shp.zip',
        multiLineString3dMultipleString,
        { encoding: 'base64' },
        function (err) {
          if (err) {
            console.log('Error', err);
          } else {
            console.log('MultiLineString3dMultiple File created');
          }
        },
      );

    fs.writeFile(
      'MultiPoint2dSingle.shp.zip',
      multiPoint2dSingleString,
      { encoding: 'base64' },
      function (err) {
        if (err) {
          console.log('Error', err);
        } else {
          console.log('MultiPoint2dSingle File created');
        }
      },
    );

    fs.writeFile(
      'MultiPoint3dSingle.shp.zip',
      multiPoint3dSingleString,
      { encoding: 'base64' },
      function (err) {
        if (err) {
          console.log('Error', err);
        } else {
          console.log('MultiPoint3dSingle File created');
        }
      },
    );

    fs.writeFile(
      'MultiPolygon2dSingle.shp.zip',
      multiPolygon2dSingleString,
      { encoding: 'base64' },
      function (err) {
        if (err) {
          console.log('Error', err);
        } else {
          console.log('MultiPolygon2dSingle File created');
        }
      },
    );

    fs.writeFile(
      'MultiPolygon3dSingle.shp.zip',
      multiPolygon3dSingleString,
      { encoding: 'base64' },
      function (err) {
        if (err) {
          console.log('Error', err);
        } else {
          console.log('MultiPolygon3dSingle File created');
        }
      },
    );

    fs.writeFile(
      'Point2dSingle.shp.zip',
      point2dSingleString,
      { encoding: 'base64' },
      function (err) {
        if (err) {
          console.log('Error', err);
        } else {
          console.log('Point2dSingle File created');
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
        'Point3dMultiple.shp.zip',
        point3dMultipleString,
        { encoding: 'base64' },
        function (err) {
          if (err) {
            console.log('Error', err);
          } else {
            console.log('Point3dMultiple File created');
          }
        },
      );

      fs.writeFile(
        'Point3dSingle.shp.zip',
        point3dSingleString,
        { encoding: 'base64' },
        function (err) {
          if (err) {
            console.log('Error', err);
          } else {
            console.log('Point3dSingle File created');
          }
        },
      );

    fs.writeFile(
      'Polygon2dMultipleRings.shp.zip',
      polygon2dMultipleRingsString,
      { encoding: 'base64' },
      function (err) {
        if (err) {
          console.log('Error', err);
        } else {
          console.log('Polygon2dMultipleRings File created');
        }
      },
    );

    fs.writeFile(
      'Polygon2dMultiple.shp.zip',
      polygon2dMultipleString,
      { encoding: 'base64' },
      function (err) {
        if (err) {
          console.log('Error', err);
        } else {
          console.log('Polygon2dMultiple File created');
        }
      },
    );

    fs.writeFile(
        'Polygon2dSingle.shp.zip',
        polygon2dSingleString,
        { encoding: 'base64' },
        function (err) {
          if (err) {
            console.log('Error', err);
          } else {
            console.log('Polygon2dSingle File created');
          }
        },
      );

      fs.writeFile(
        'Polygon3dMultiple.shp.zip',
        polygon3dMultipleString,
        { encoding: 'base64' },
        function (err) {
          if (err) {
            console.log('Error', err);
          } else {
            console.log('Polygon3dMultiple File created');
          }
        },
      );

    fs.writeFile(
      'Polygon3dSingle.shp.zip',
      polygon3dSingleString,
      { encoding: 'base64' },
      function (err) {
        if (err) {
          console.log('Error', err);
        } else {
          console.log('Polygon3dSingle File created');
        }
      },
    );
  },
);
