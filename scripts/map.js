/**
 * @TODO
    * @message : 'You need to allow location'
    * @markers : bath rd / bath rd 135 icons not showing
    * @waypoints : get waypoints from added layerIDs
    * @popups : add artist info for each studio
    * @checkboxes : slides are checking all artists / need to change to studios instead?
 */

import mapboxgl from 'mapbox-gl';

// Sort dep error
// import MapboxDirections from 'mapbox/mapbox-gl-directions';

// import polygon from '/data/polygons/pentagon.json' assert { type: 'json' };
// import polygon from '/data/polygons/triangle.json' assert { type: 'json' };
// import polygon from '/data/polygons/square.json' assert { type: 'json' };
// import polygon from '/data/polygons/circle.json' assert { type: 'json' };

// Polygons
import towncentre from '/data/polygons/towncentre.json' assert { type: 'json' };
import nailsworth from '/data/polygons/nailsworth.json' assert { type: 'json' };
import vale from '/data/polygons/vale.json' assert { type: 'json' };
import slad from '/data/polygons/slad.json' assert { type: 'json' };
import goldenvalley from '/data/polygons/goldenvalley.json' assert { type: 'json' };
import bisley from '/data/polygons/bisley.json' assert { type: 'json' };
import multi_polygon from '../data/polygons/multipolygon.js';
import test from '../data/polygons/test.js';

import routes from '/data/routes.json' assert { type: 'json' };
import studios from '/data/studios.json' assert { type: 'json' };
import studio_markers from '/data/studio-markers.js';
import styles from '/scripts/styles.js'

mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dGhpYXN3ZXN0b24iLCJhIjoiY2xlNHIya255MDJqaTNwbXY5NjUzdWgzYSJ9.af8OJ3gOuIiOvKkYllihGQ';

const filterGroup = document.getElementById('filter-group');

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/matthiasweston/clhuty4u3020p01r0f1wb6lwo',
    center: [-2.181235, 51.736333],
    zoom: 11.5
});

// Initial markers for all studios
studio_markers.forEach(({studio, color, lngLat}) => {
    const popup = new mapboxgl.Popup({ offset: 25,}).setHTML(studio) // change to info setHTML

    new mapboxgl.Marker({
        color: color,
        scale: 0.8
    })
    .setLngLat(lngLat)
    .setPopup(popup)
    .addTo(map)

   /* marker.addEventListener('mouseenter', function() {
        popup.togglePopup()
    }) */
})

map.on('load', () => {
    map.addControl(new mapboxgl.NavigationControl(), 'top-left');
    //map.setPaintProperty('routes', 'line-width', 3);
   
    /**
     * @note Directions API : request up to 25 waypoints only
     */
    map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
                // max zoom
                // enableHighAccuracy: true
            },
            fitBoundsOptions: {
                maxZoom: 13 // edit this
            },
            trackUserLocation: true,
            showUserHeading: true,
        }),
        'top-left'
    );

    const directions =
        new MapboxDirections({
            accessToken: mapboxgl.accessToken,
            unit: 'metric',
           //steps: true,
           //banner_instructions: true,
            // coordinates: 
            profile: 'mapbox/cycling',
            alternatives: false,
            controls: {
                instructions: false,
                inputs: false,
            },
            interactive: false,
            styles: styles
        });

    map.addControl(directions,
        'top-left'
    );

    
/* MAIN POLYGON

    map.addSource('polygon', {
        'type': 'geojson',
        'data': polygon
    });
    map.addLayer({
        'id': 'polygon',
        'type': 'fill',
        'source': 'polygon',
        'layout': {},
        'paint': {
            'fill-color': '#0080ff',
            'fill-opacity': 0.1
        }
    });
    map.addLayer({
        'id': 'outline',
        'type': 'line',
        'source': 'polygon',
        'layout': {},
        'paint': {
            'line-color': '#000',
            'line-width': 1
        }
    });

    */




   /* map.addSource('test', {
        'type': 'geojson',
        'data': test
    });
    map.addLayer({
        'id': 'test',
        'type': 'fill',
        'source': 'test',
        'layout': {},
        'paint': {
            'fill-color': '#f84d4d',
            'fill-opacity': polygon_opacity
        }
    });
     map.addLayer({
        'id': 'test-outline',
        'type': 'line',
        'source': 'test',
        'layout': {},
        'paint': {
            'line-color': '#000',
            'line-width': line_width
        }
    });*/
   /*

    map.addSource('towncentre', {
        'type': 'geojson',
        'data': towncentre
    });
    map.addLayer({
        'id': 'towncentre',
        'type': 'fill',
        'source': 'towncentre',
        'layout': {},
        'paint': {
            'fill-color': '#f84d4d',
            'fill-opacity': polygon_opacity
        }
    });
    map.addLayer({
        'id': 'town-outline',
        'type': 'line',
        'source': 'towncentre',
        'layout': {},
        'paint': {
            'line-color': '#000',
            'line-width': line_width
        }
    }); /*

    map.addSource('nailsworth', {
        'type': 'geojson',
        'data': nailsworth
    });
    map.addLayer({
        'id': 'nailsworth',
        'type': 'fill',
        'source': 'nailsworth',
        'layout': {},
        'paint': {
            'fill-color': '#4264fb',
            'fill-opacity': polygon_opacity
        }
    });
    map.addLayer({
        'id': 'nailsworth-outline',
        'type': 'line',
        'source': 'nailsworth',
        'layout': {},
        'paint': {
            'line-color': '#000',
            'line-width': line_width
        }
    });

    map.addSource('vale', {
        'type': 'geojson',
        'data': vale
    });
    map.addLayer({
        'id': 'vale',
        'type': 'fill',
        'source': 'vale',
        'layout': {},
        'paint': {
            'fill-color': '#40546a',
            'fill-opacity': polygon_opacity
        }
    });
    map.addLayer({
        'id': 'vale-outline',
        'type': 'line',
        'source': 'vale',
        'layout': {},
        'paint': {
            'line-color': '#000',
            'line-width': line_width
        }
    });


    // 4 SLAD POLY
    map.addSource('slad', {
        'type': 'geojson',
        'data': slad
    });
    map.addLayer({
        'id': 'slad',
        'type': 'fill',
        'source': 'slad',
        'layout': {},
        'paint': {
            'fill-color': '#f79640',
            'fill-opacity': 0.3
        }
    });
    map.addLayer({
        'id': 'slad-outline',
        'type': 'line',
        'source': 'slad',
        'layout': {},
        'paint': {
            'line-color': '#000',
            'line-width': line_width
        }
    });

    // 5 bisley
    map.addSource('bisley', {
        'type': 'geojson',
        'data': bisley
    });
    map.addLayer({
        'id': 'bisley',
        'type': 'fill',
        'source': 'bisley',
        'layout': {},
        'paint': {
            'fill-color': '#7753eb',
            'fill-opacity': 0.3
        }
    });
    map.addLayer({
        'id': 'bisley-outline',
        'type': 'line',
        'source': 'bisley',
        'layout': {},
        'paint': {
            'line-color': '#000',
            'line-width': line_width
        }
    });

    map.addSource('goldenvalley', {
        'type': 'geojson',
        'data': goldenvalley
    });
    map.addLayer({
        'id': 'goldenvalley',
        'type': 'fill',
        'source': 'goldenvalley',
        'layout': {},
        'paint': {
            'fill-color': '#207a4b',
            'fill-opacity': 0.3
        }
    });
    map.addLayer({
        'id': 'golden-outline',
        'type': 'line',
        'source': 'goldenvalley',
        'layout': {},
        'paint': {
            'line-color': '#000',
            'line-width': line_width
        }
    }); */

    /* MULTIPOLYGON */

   // const polygon_colors = ['#f84d4d', '#4264fb', '#40546a', '#f79640', '#7753eb', '#207a4b'];

   const line_width = 2;
   const polygon_opacity = 0.5;

    map.addSource('multi_polygon', {
        type: 'geojson',
        data: multi_polygon
      });

      multi_polygon.features.forEach((feature) => {
        const layerID = `polygon-${feature.properties.color}`
        const polygon_opacity = 0.5;
        map.addLayer({
          id: layerID,
          type: 'fill',
          source: 'multi_polygon',
          paint: {
            'fill-color': ['get', 'color'],
            'fill-opacity': 0.1
          },
          layout: {}
        });
      });

      map.addLayer({
        'id': 'poly-outline',
        'type': 'line',
        'source': 'multi_polygon',
        'layout': {},
        'paint': {
            'line-color': '#000',
            'line-width': line_width
        }
    });


    /**
     * @Routes (5 Valleys)
     */
/*
    map.addSource('routes', {
        'type': 'geojson',
        'data': routes
    });
    map.addLayer({
        'id': 'routes',
        'type': 'symbol',
        'source': 'routes',
        'layout': {
            'icon-image': ['get', 'icon'],
            'icon-size': 1.1,
            'text-field': ['get', 'title'],
            'icon-allow-overlap': true,
            'text-allow-overlap': true,
            'text-font': [
                'Open Sans Semibold',
                'Arial Unicode MS Bold'
            ],
            'text-offset': [0, 0.5],
            'text-anchor': 'top',
            'text-size': 24
        },
        'paint': {
            'text-color': ['get', 'color']
        }
    });
    */

    /**
     * @studios
     */

    map.addSource('studios', {
        'type': 'geojson',
        'data': studios
    });

    for (const feature of studios.features) {
        const symbol = feature.properties.icon;
        const waypoint = feature.geometry.coordinates;
        const layerID = `poi-${symbol}`;

        if (!map.getLayer(layerID)) {
            map.addLayer({
                'id': layerID,
                'type': 'symbol',
                'source': 'studios',
                'layout': {
                    'icon-image': `${symbol}`,
                    'icon-size': 0.9,
                   // 'icon-allow-overlap': true,
                   // 'text-allow-overlap': true,
                    'text-field': ['get', 'title'],
                    'text-font': [
                        'Open Sans Semibold',
                        'Arial Unicode MS Bold'
                    ],
                    'text-offset': [0, 1],
                    'text-anchor': 'top',
                    'text-size': 18
                },
                'paint': {
                    'text-color': ['get', 'color'],
                    'line-color': '#ffffff',
                    'line-width': 6
                },
               'filter': ['==', 'icon', symbol]

            });
            map.setLayoutProperty(layerID, 'visibility', 'none');

            const input = document.createElement('input');
            input.type = 'checkbox';
            input.id = layerID;
            input.checked = false;
            filterGroup.appendChild(input);  // class in map project html

            const label = document.createElement('label');
            label.setAttribute('for', layerID);
            label.textContent = symbol;
            filterGroup.appendChild(label);
           
            navigator.geolocation.getCurrentPosition(function(position) {
                var userLongitude = position.coords.longitude;
                var userLatitude = position.coords.latitude;
                directions.setOrigin([userLongitude, userLatitude]);
                directions.setDestination([userLongitude, userLatitude]);
            })

            /**
             * Route Colour
             */

             // Listen to the `route` event
             directions.on('route', function() {
                var routeColor = '#f84d4d';
                var routeColor = '#ff6868';
                var routeOutlineColor = '#111';
                // Access the route layer and update its paint properties
                map.setPaintProperty('directions-route-line', 'line-color', routeColor, 'line-width', 8);
                map.setPaintProperty('directions-route-line-alt', 'line-color', routeOutlineColor);                
            });
            

            // If want to add waypoint but don't remove on uncheck
           /* input.addEventListener('change', (e) => {
                map.setLayoutProperty(
                    layerID,
                    'visibility',
                    // on change check if checked and return visible or none
                    e.target.checked ? 'visible' : 'none'
                );
                directions.addWaypoint(0, waypoint)
            });
            */
           
            // Add / remove waypoints
           input.addEventListener('change', (e) => {
               if (e.target.checked) {
                   map.setLayoutProperty(layerID, 'visibility', 'visible');
                   directions.addWaypoint(0, waypoint);
               } else {
                   map.setLayoutProperty(layerID, 'visibility', 'none')
                   directions.removeWaypoint(0);
               }
           })
        }
    }
});

