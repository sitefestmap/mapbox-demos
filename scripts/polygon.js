import mapboxgl from 'mapbox-gl'; 

mapboxgl.accessToken =
'pk.eyJ1IjoibWF0dGhpYXN3ZXN0b24iLCJhIjoiY2xlNHIya255MDJqaTNwbXY5NjUzdWgzYSJ9.af8OJ3gOuIiOvKkYllihGQ';

const map = new mapboxgl.Map({
    container: 'map', // id
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-2.199771, 51.731509],
    zoom: 10.5,
});

map.addControl(new mapboxgl.NavigationControl())

map.on('load', () => {
    // Add a data source containing GeoJSON data.
    map.addSource('sitefest', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'geometry': {
                'type': 'Polygon',
                'coordinates': [
                    [
                        [ -2.31654, 51.76 ], 
                        [ -2.1, 51.8 ],
                        [ -2.172, 51.65 ], 
                        [ -2.31654, 51.76 ],
                    ]
                ]
            }
        }
    });
     
    // Add a new layer to visualize the polygon.
    map.addLayer({
        'id': 'sitefest',
        'type': 'fill',
        'source': 'sitefest',
        'layout': {},
        'paint': {
            'fill-color': '#0080ff',
            'fill-opacity': 0.2
        }
    });
    // Add a black outline around the polygon.
    map.addLayer({
        'id': 'outline',
        'type': 'line',
        'source': 'sitefest',
        'layout': {},
        'paint': {
            'line-color': '#111',
            'line-width': 2
        }
    });
})