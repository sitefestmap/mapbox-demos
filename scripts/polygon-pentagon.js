import mapboxgl from 'mapbox-gl'; 

// Edit :  https://geojson.io/#map=10.82/51.735/-2.2018

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
                      [
                        -2.291221788300163,
                        51.729103552970344
                      ],
                      [
                        -2.2283308840313225,
                        51.68534388493532
                      ],
                      [
                        -2.13580344535535,
                        51.70861879727113
                      ],
                      [
                        -2.1349550161512525,
                        51.76291731297218
                      ],
                      [
                        -2.235259176292061,
                        51.78242260623381
                      ],
                      [
                        -2.291221788300163,
                        51.729103552970344
                      ]
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
            'fill-opacity': 0.1
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