const waypoints = [
    [-2.2167788, 51.7445037], // John St
    [-2.21798684, 51.74506395], // Weven
    [-2.2170453, 51.7451129] // Cacao Circl
];

const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${waypoints.join(';')}?access_token=${mapboxgl.accessToken}`;
