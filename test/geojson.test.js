var expect = require('expect.js'),
geojson = require('../src/geojson');

// import geojson
const gjPoint = require('./geojson/Point.json');
const gjPointZ = require('./geojson/PointZ.json');
const gjMultiPoint = require('./geojson/MultiPoint.json');
const gjMultiPointZ = require('./geojson/MultiPointZ.json');

const gjLineString = require('./geojson/LineString.json');
const gjLineStringZ = require('./geojson/LineStringZ.json');
const gjMultiLineString = require('./geojson/MultiLineString.json');
const gjMultiLineStringZ = require('./geojson/MultiLineStringZ.json');

const gjPolygon = require('./geojson/Polygon.json');
const gjPolygonZ = require('./geojson/PolygonZ.json');
const gjMultiPolygon = require('./geojson/MultiPolygon.json');
const gjMultiPolygonZ = require('./geojson/MultiPolygonZ.json');


describe('geojson', function() {
    describe('#point', function() {
        it('should return coordinates, properties, and type', function() {
            const result = geojson.point(gjPoint);
            
            const idealResult = {
                geometries: [
                    [
                        [2.2945064306259155,48.85825817805569],
                    ]
                ],
                properties: [{
                    name: 'Point-Name'
                }],
                type: 'POINT'
            };
            
            expect(result).to.eql(idealResult);
        });
    });
    
    describe('#polygon', function() {
        it('should return coordinates, properties, and type', function() {
            const result = geojson.polygon(gjPolygon);
            
            const idealResult = {
                geometries: [
                    [
                        [
                            [
                                [-122.30279803276056, 37.88183985973943],
                                [-122.3025619983673, 37.88112007262953],
                                [-122.30207920074463, 37.88123862628449],
                                [-122.3023045063018, 37.881933008145445],
                                [-122.30279803276056, 37.88183985973943]
                            ]
                        ]
                    ],
                ],
                properties: [{
                    name: 'Polygon-Name'
                }],
                type: 'POLYGON'
            };
  
            expect(result).to.eql(idealResult);
        });
    });
});
