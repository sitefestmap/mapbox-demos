import mapboxgl from 'mapbox-gl';


const mapboxSDK = require('mapbox/mapbox-sdk/services/directions');
//const directionsService = mapboxSDK({ accessToken: `${mapboxgl.accessToken}` });

// Sort dep error
// import MapboxDirections from 'mapbox/mapbox-gl-directions';

// import polygon from '/data/polygons/pentagon.json' assert { type: 'json' };
import polygon from '/data/polygons/triangle.json' assert { type: 'json' };
// import polygon from '/data/polygons/square.json' assert { type: 'json' };
// import polygon from '/data/polygons/circle.json' assert { type: 'json' };

import routes from '/data/routes.json' assert { type: 'json' };
import studios from '/data/studios.json' assert { type: 'json' };

//mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dGhpYXN3ZXN0b24iLCJhIjoiY2xlNHIya255MDJqaTNwbXY5NjUzdWgzYSJ9.af8OJ3gOuIiOvKkYllihGQ';

const filterGroup = document.getElementById('filter-group');

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/matthiasweston/clhuty4u3020p01r0f1wb6lwo',
    center: [-2.181235, 51.736333],
    zoom: 11.15
});


//////////////////////////////////////////////////////////////
/*

const coordinates = [
    [-2.181235, 51.736333], // Example starting point
    [-2.181235, 51.736333], // Example destination
  ];

// Make sure each layer has a unique `id` assigned to it.
const layerIds = [
    'layer1', 
    'layer2', 
    'layer3'
]; // Example layer IDs

// request directions
directionsService
     .getDirections({
       waypoints: coordinates,
       geometries: 'geojson',
     })
     .send()
     .then(response => {
       const directions = response.body;

// Iterate over each layer ID and add directions to the respective layer
layerIds.forEach(layerId => {
    // Assuming you have already added the layer to the map
    const layer = map.getLayer(layerId);
    
    // Apply directions to the layer
    map.setFeatureState(
      { source: layer.source, sourceLayer: layer.sourceLayer },
      { direction: directions },
    );
  });
})
.catch(error => {
  console.error('Error:', error);
});

*/
//////////////////////////////////////////////////////////////



map.on('load', () => {

    map.addControl(new mapboxgl.NavigationControl(), 'top-left');

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
                maxZoom: 12 // edit this
            },
            trackUserLocation: true,
            showUserHeading: true,
        }),
        'top-left'
    );

   // const directions =
        map.addControl(
            new MapboxDirections({
                accessToken: mapboxgl.accessToken,
                // coordinates: 
                profile: 'mapbox/driving',
                controls: {
                    instructions: false,
                    inputs: false
                }
            }),
            'top-left'    
        );

    map.addSource('studios', {
        'type': 'geojson',
        'data': studios
    });

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
   
    for (const feature of studios.features) {
        const symbol = feature.properties.icon;
        const layerID = `poi-${symbol}`;

        if (!map.getLayer(layerID)) {
            map.addLayer({
                'id': layerID,
                'type': 'symbol',
                'source': 'studios',
                'layout': {
                    'icon-image': `${symbol}`,
                    'icon-size': 1,
                    'icon-allow-overlap': true,
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
                    'text-color': ['get', 'color']
                },
               'filter': ['==', 'icon', symbol]
            });

            map.setLayoutProperty(layerID, 'visibility', 'none');

            const input = document.createElement('input');
            input.type = 'checkbox';
            input.id = layerID;
            input.checked = false;
            filterGroup.appendChild(input);

            const label = document.createElement('label');
            label.setAttribute('for', layerID);
            label.textContent = symbol;
            filterGroup.appendChild(label);

            input.addEventListener('change', (e) => {
                map.setLayoutProperty(
                    layerID,
                    'visibility',
                    e.target.checked ? 'visible' : 'none',
                );

                /*

                add waypoints like: https://docs.mapbox.com/playground/directions/

                const query = await fetch(
                    `https://api.mapbox.com/directions/v5/mapbox/driving/${layerID}?alternatives=true&geometries=geojson&language=en&overview=simplified&steps=true&access_token=pk.eyJ1IjoibWF0dGhpYXN3ZXN0b24iLCJhIjoiY2xlNHIya255MDJqaTNwbXY5NjUzdWgzYSJ9.af8OJ3gOuIiOvKkYllihGQ`,
                    { method: 'GET'}
                );
                const json = await query.json()

                */

                
                // Call Directions API each time a layerID is added
                // coordinate pairs seperated by colon
                // const url = ''

                // directions.setOrigin(layerID)
                // directions.setDestination(layerID);
                // directions.setWaypoint(layerID)
               
                // https://mapbox-gl-path.netlify.app

                // make requests with SDK
                // https://github.com/mapbox/mapbox-sdk-js
            });
        }
    }
});