/**
    * @TODO
    * Numbered Icons for 5 Areas
        * Note : Mapnik lib doesn't allow svg <text> elements 
    * generate Directions for checked layers
        * @link https://docs.mapbox.com/playground/directions
        * Directions API 100000 free requests per month
        * Geocoding API sets start/end points
        * 
    * Layer popups with info about artists at a studio
    * Rename icons
    * Choose polygon shape, opacity, then check color contrast
    * Move into 2 page setup
    * if tricky, could change to 1 page App ( Map below slideshow )
    * Map Style
    * Integrate into the main app
    * If go over free tier, make new account and reupload svgs
        * (For this purpose, Datasets have been written in the repo rather than in the mapbox studio) 
    * Make sveltekit version for fun
*/

import mapboxgl from 'mapbox-gl';

// Sort dep error
// import MapboxDirections from 'mapbox/mapbox-gl-directions';

// import polygon from '/data/polygons/pentagon.json' assert { type: 'json' };
import polygon from '/data/polygons/triangle.json' assert { type: 'json' };
// import polygon from '/data/polygons/square.json' assert { type: 'json' };
// import polygon from '/data/polygons/circle.json' assert { type: 'json' };

import routes from '/data/routes.json' assert { type: 'json' };
import studios from '/data/studios.json' assert { type: 'json' };

mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dGhpYXN3ZXN0b24iLCJhIjoiY2xlNHIya255MDJqaTNwbXY5NjUzdWgzYSJ9.af8OJ3gOuIiOvKkYllihGQ';

const filterGroup = document.getElementById('filter-group');
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/matthiasweston/clhuty4u3020p01r0f1wb6lwo',
    center: [-2.181235, 51.736333],
    zoom: 11.15
});

map.addControl(new mapboxgl.NavigationControl(), 'top-left');

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
        showUserHeading: true
    }),
    'top-left'
);

/*
map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        coordinates: 5
    }),
    'top-left'
);
*/

map.on('load', () => {
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
            'text-size': 20
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
                    'text-size': 16
                },
                'paint': {
                    'text-color': ['get', 'color']
                },
               'filter': ['==', 'icon', symbol]
               //'filter': ['null', '']
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
                    e.target.checked ? 'visible' : 'none'
                );
            });
        }
    }
});














/*
new mapboxgl.Marker({
    element: document.getElementById('4')
})
    .setLngLat([-2.193, 51.767])
    .addTo(map);
*/


/*

routeMarkers.forEach(({ route, icon, lngLat}) => {
     new mapboxgl.Marker({
        icon: icon,
        scale: 0.6
    })
    .setLngLat(lngLat)
    // .setPopup(popup)
    .addTo(map)
})

*/


/*

studioMarkers.forEach(({studio, color, lngLat}) => {
    const popup = new mapboxgl.Popup({ offset: 25}).setHTML(studio) // change to info setHTML
    new mapboxgl.Marker({
        color: color,
        scale: 0.6
    })
    .setLngLat(lngLat)
    .setPopup(popup)
    .addTo(map)
})

*/