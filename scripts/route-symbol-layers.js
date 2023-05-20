// https://docs.mapbox.com/mapbox-gl-js/example/geojson-markers/
// https://docs.mapbox.com/help/glossary/symbol-layer/
// https://docs.mapbox.com/mapbox-gl-js/example/add-image/
// https://labs.mapbox.com/maki-icons/editor/

mapboxgl.accessToken =
'pk.eyJ1IjoibWF0dGhpYXN3ZXN0b24iLCJhIjoiY2xlNHIya255MDJqaTNwbXY5NjUzdWgzYSJ9.af8OJ3gOuIiOvKkYllihGQ';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-2.199771, 51.731509],
    zoom: 11.5,
});

map.on('load', () => {
    // TODO : wrap up into one smaller block with 'icon-image': ['get', 'icon'],
    // Color contrast
    map.loadImage(
        '/static/mapbox-marker-icon-20px-red.png',
        (error, image) => {
            if (error) throw error;
            
            map.addImage('red-marker', image);
            map.addSource('town-center', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-2.23, 51.742]
                            },
                            'properties': {
                                'title': 'Stroud Town Centre',
                                'icon' : 'red-marker',
                                'color':  '#832917' // red : hsl 10 70 30
                            }
                        },
                    ]
                }
            });

            map.addLayer({
                'id': 'town-center',
                'type': 'symbol',
                'source': 'town-center',
                'layout': {
                    'icon-image': 'red-marker',
                    // 'icon-image': ['get', 'icon'],
                    'text-field': ['get', 'title'],
                    'text-font': [
                        'Open Sans Semibold',
                        'Arial Unicode MS Bold'
                    ],
                    'text-offset': [0, 1],
                    'text-anchor': 'top',
                    'text-size': 20
                },
                'paint': {
                    'text-color': ['get', 'color']
                }
            });
        }
    );

    // 2 Valley and Vale
    map.loadImage(
        '/static/mapbox-marker-icon-20px-gray.png',
        (error, image) => {
            if (error) throw error;
            
            map.addImage('gray-marker', image);
            map.addSource('vale', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-2.29, 51.75]
                            },
                            'properties': {
                                'title': 'Valley and Vale',
                                'icon' : 'gray-marker',
                                'color':  '#176883' // mid_blue : hsl 195 70 30
                            }
                        },
                    ]
                }
            });
            map.addLayer({
                'id': 'vale',
                'type': 'symbol',
                'source': 'vale',
                'layout': {
                    'icon-image': 'gray-marker',
                    // 'icon-image': ['get', 'icon'],
                    'text-field': ['get', 'title'],
                    'text-font': [
                        'Open Sans Semibold',
                        'Arial Unicode MS Bold'
                    ],
                    'text-offset': [0, 1],
                    'text-anchor': 'top',
                    'text-size': 20
                },
                'paint': {
                    'text-color': ['get', 'color']
                }
            });
        }
    );

    // 3 Bisley
    map.loadImage(
        '/static/mapbox-marker-icon-20px-blue.png',
        (error, image) => {
            if (error) throw error;
            
            map.addImage('blue-marker', image);
            map.addSource('bisley', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-2.185, 51.744]
                            },
                            'properties': {
                                'title': 'Bisley',
                                'icon' : 'blue-marker',
                                'color':  '#174483' // dark_blue hsl 215 70 30
                            }
                        },
                    ]
                }
            });
            map.addLayer({
                'id': 'bisley',
                'type': 'symbol',
                'source': 'bisley',
                'layout': {
                    'icon-image': 'blue-marker',
                    // 'icon-image': ['get', 'icon'],
                    'text-field': ['get', 'title'],
                    'text-font': [
                        'Open Sans Semibold',
                        'Arial Unicode MS Bold'
                    ],
                    'text-offset': [0, 1],
                    'text-anchor': 'top',
                    'text-size': 20
                },
                'paint': {
                    'text-color': ['get', 'color']
                }
            });
        }
    );

    // 4 Slad Valley
    map.loadImage(
        '/static/mapbox-marker-icon-20px-orange.png',
        (error, image) => {
            if (error) throw error;
            map.addImage('orange-marker', image);
            map.addSource('slad', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-2.216, 51.77]
                            },
                            'properties': {
                                'title': 'Slad Valley',
                                'icon' : 'orange-marker',
                                'color':  '#834d17' // orange hsl 30 70 30
                            }
                        },
                    ]
                }
            });
            map.addLayer({
                'id': 'slad',
                'type': 'symbol',
                'source': 'slad',
                'layout': {
                    'icon-image': 'orange-marker',
                    // 'icon-image': ['get', 'icon'],
                
                    'text-field': ['get', 'title'],
                    'text-font': [
                        'Open Sans Semibold',
                        'Arial Unicode MS Bold'
                    ],
                    'text-offset': [0, 1],
                    'text-anchor': 'top',
                    'text-size': 20
                },
                'paint': {
                    'text-color': ['get', 'color']
                }
            });
        }
    );

    // 5 Golden Valley
    map.loadImage(
        '/static/mapbox-marker-icon-20px-purple.png',
        (error, image) => {
            if (error) throw error;
            map.addImage('purple-marker', image);
            map.addSource('golden', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-2.140133, 51.721]
                            },
                            'properties': {
                                'title': 'Golden Valley',
                                'icon' : 'purple-marker',
                                'color':  '#5f1783' // purple hsl 280 70 30
                            }
                        },
                    ]
                }
            });
            map.addLayer({
                'id': 'golden',
                'type': 'symbol',
                'source': 'golden',
                'layout': {
                    'icon-image': 'purple-marker',
                    // 'icon-image': ['get', 'icon'],
                
                    'text-field': ['get', 'title'],
                    'text-font': [
                        'Open Sans Semibold',
                        'Arial Unicode MS Bold'
                    ],
                    'text-offset': [0, 1],
                    'text-anchor': 'top',
                    'text-size': 20
                },
                'paint': {
                    'text-color': ['get', 'color']
                }
            });
        }
    );
    
    // 6 Nailsworth
    map.loadImage(
        '/static/mapbox-marker-icon-20px-green.png',
        (error, image) => {
            if (error) throw error;
            map.addImage('green-marker', image);
            map.addSource('nailsworth', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-2.2, 51.71]
                            },
                            'properties': {
                                'title': 'Nailsworth',
                                'icon' : 'green-marker',
                                'color':  '#17834d' // green 150 70 30
                            }
                        },
                    ]
                }
            });
            map.addLayer({
                'id': 'nailsworth',
                'type': 'symbol',
                'source': 'nailsworth',
                'layout': {
                    'icon-image': 'green-marker',
                    // 'icon-image': ['get', 'icon'],
                
                    'text-field': ['get', 'title'],
                    'text-font': [
                        'Open Sans Semibold',
                        'Arial Unicode MS Bold'
                    ],
                    'text-offset': [0, 1],
                    'text-anchor': 'top',
                    'text-size': 20
                },
                'paint': {
                    'text-color': ['get', 'color']
                }
            });
        }
    );
});
