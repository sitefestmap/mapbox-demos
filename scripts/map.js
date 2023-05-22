import mapboxgl from 'mapbox-gl';

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
    center: [-2.2167788, 51.7445037],
    zoom: 11.15
});

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
                    'icon-size': 0.9,
                    'icon-allow-overlap': true,
                    'text-field': ['get', 'title'],
                    'text-font': [
                        'Open Sans Semibold',
                        'Arial Unicode MS Bold'
                    ],
                    'text-offset': [0, 1],
                    'text-anchor': 'top',
                    'text-size': 15
                },
                'paint': {
                    'text-color': ['get', 'color']
                },
                'filter': ['==', 'icon', symbol]
            });

            const input = document.createElement('input');
            input.type = 'checkbox';
            input.id = layerID;
            input.checked = true;
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
