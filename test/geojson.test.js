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
    
    describe('#pointZ', function() {
        it.skip('should return coordinates, properties, and type', function() {
            const result = geojson.pointZ(gjPointZ);
            
            const idealResult = {
                geometries: [
                    [
                        [2.2945064306259155, 48.85825817805569, 75],
                    ]
                ],
                properties: [{
                    name: 'PointZ-Name'
                }],
                type: 'POINTZ'
            };
            
            expect(result).to.eql(idealResult);
        });
    });
    
    describe('#multipoint', function() {
        it('should return coordinates, properties, and type', function() {
            const result = geojson.multipoint(gjMultiPoint);
            
            const idealResult = {
                geometries: [
                    [
                        [
                            2.2945064306259155,
                            48.85825817805569
                        ],
                        [
                            2.312525510787964,
                            48.854991630542706
                        ]
                    ]
                ],
                properties: [{
                    name: 'MultiPoint-Name'
                }],
                type: 'MULTIPOINT'
            };
            
            expect(result).to.eql(idealResult);
        });
    });
    
    describe('#multipointZ', function() {
        it.skip('should return coordinates, properties, and type', function() {
            const result = geojson.multipointZ(gjMultiPointZ);
            
            const idealResult = {
                geometries: [
                    [
                        [
                            2.2945064306259155,
                            48.85825817805569,
                            75
                        ],
                        [
                            2.312525510787964,
                            48.854991630542706,
                            5
                        ]
                    ]
                ],
                properties: [{
                    name: 'MultiPointZ-Name'
                }],
                type: 'MULTIPOINTZ'
            };
            
            expect(result).to.eql(idealResult);
        });
    });
    
    describe('#linestring', function() {
        it('should return coordinates, properties, and type', function() {
            const result = geojson.line(gjLineString);
            
            const idealResult = {
                geometries: [
                    [
                        [
                            [
                                -120.861132144928,
                                37.52547739205533
                            ],
                            [
                                -120.85253834724426,
                                37.525460374347695
                            ]
                        ]
                    ]
                ],
                properties: [{
                    name: 'LineString-Name'
                }],
                type: 'POLYLINE'
            };
            
            expect(result).to.eql(idealResult);
        });
    });
    
    describe('#linestringZ', function() {
        it.skip('should return coordinates, properties, and type', function() {
            const result = geojson.line(gjLineStringZ);
            
            const idealResult = {
                geometries: [
                    [
                        [
                            [
                                -120.861132144928,
                                37.52547739205533,
                                200
                            ],
                            [
                                -120.85253834724426,
                                37.525460374347695,
                                250
                            ]
                        ]
                    ]
                ],
                properties: [{
                    name: 'LineStringZ-Name'
                }],
                type: 'POLYLINEZ'
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
    
    describe('#polygonZ', function() {
        it.skip('should return coordinates, properties, and type', function() {
            const result = geojson.polygonZ(gjPolygonZ);
            
            const idealResult = {
                geometries: [
                    [
                        [
                            [
                                [-122.30279803276056, 37.88183985973943, 100],
                                [-122.3025619983673, 37.88112007262953, 110],
                                [-122.30207920074463, 37.88123862628449, 120],
                                [-122.3023045063018, 37.881933008145445, 130],
                                [-122.30279803276056, 37.88183985973943, 100]
                            ]
                        ]
                    ],
                ],
                properties: [{
                    name: 'PolygonZ-Name'
                }],
                type: 'POLYGONZ'
            };
  
            expect(result).to.eql(idealResult);
        });
    });
});
