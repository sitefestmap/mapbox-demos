
const center_bottom = [-2.217850418218603, 51.74117023834362];
const center_bottom_left = [-2.223084174810481, 51.745370277385945];
const center_top_left = [-2.220203207878683, 51.74711993736873];
const center_top_right = [-2.214924597164244, 51.74534944307196];
const center_bottom_right = [-2.214825402940761, 51.74251835473324];

const outside_bottom = [-2.206785, 51.685108];
const outside_bottom_left = [-2.323886, 51.727967];
const outside_bottom_right = [-2.10405, 51.733189];
const outside_top_left = [-2.247626, 51.794135];
const outside_top_right = [-2.12014, 51.784184];

const red = '#f84d4d'
const mid_blue = '#4264fb'
const blue = '#40546a' 
const orange = '#f79640'
const purple = '#7753eb'
const green = '#207a4b'

const multi_polygon = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            properties: { color: red},
            geometry: {
                type: 'Polygon',
                coordinates: [ // 1 Town Center
                    [
                        center_bottom,
                        center_bottom_left,
                        center_top_left,
                        center_top_right,
                        center_bottom_right,
                        center_bottom,
                    ]
                ]
            }
        },
        {   // 2 Nailsworth
            type: 'Feature',
            properties: { color: mid_blue},
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                        center_bottom,
                        center_bottom_left,
                        outside_bottom_left,
                        outside_bottom,
                        center_bottom
                    ]
                ]
            }
        },
        {  // 3 Vale
            type: 'Feature',
            properties: { color: blue},
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                        center_top_left,
                        center_bottom_left,
                        outside_bottom_left,
                        outside_top_left,
                        center_top_left
                    ]
                ]
            }
        },
        {
            // 4 Slad
            type: 'Feature',
            properties: { color: orange },
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                        center_top_left,
                        outside_top_left,
                        outside_top_right,
                        center_top_right,
                        center_top_left,
                    ]
                ]
            }
        },
        {
            // 5 Bisley
            type: 'Feature',
            properties: { color: purple },
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                        center_top_right,
                        outside_top_right,
                        outside_bottom_right,
                        center_bottom_right,
                        center_top_right
                    ]
                ]
            }
        },
        {
            // 6 Golden Valley
            type: 'Feature',
            properties: { color: green},
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                        center_bottom_right,
                        center_bottom,
                        outside_bottom,
                        outside_bottom_right,
                        center_bottom_right
                    ]
                ]
            }
        }
    ]
};

export default multi_polygon;