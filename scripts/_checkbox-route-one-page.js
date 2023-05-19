
//L.mapbox.accessToken = 'pk.eyJ1IjoibWF0dGhpYXN3ZXN0b24iLCJhIjoiY2xlNHIya255MDJqaTNwbXY5NjUzdWgzYSJ9.af8OJ3gOuIiOvKkYllihGQ';

// mapboxgl.accessToken 

// OLD MAPBOX LIBRARY

L.mapbox.accessToken = 'pk.eyJ1IjoibWF0dGhpYXN3ZXN0b24iLCJhIjoiY2xlNHIya255MDJqaTNwbXY5NjUzdWgzYSJ9.af8OJ3gOuIiOvKkYllihGQ';

var map = L.mapbox.map('map', 'mapbox.light') .setView([-2.2167788, 51.7445037], 6);;

/////////

var featureLayerGeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#dc1000",
          "marker-size": "medium",
          "marker-symbol": "heliport",
          "CAT_CODE": "novisad"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            19.8335496,
            45.2671352
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#2095c8",
          "marker-size": "large",
          "marker-symbol": "1",
          "CAT_CODE": "beograd"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            20.4589216,
            44.786568
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#dc0000",
          "marker-size": "medium",
          "marker-symbol": "",
          "CAT_CODE": "beograd"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            20.5589216,
            44.986568
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#f19",
          "marker-size": "medium",
          "marker-symbol": "3",
          "CAT_CODE": "sarajevo"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            18.4130763,
            43.8562586
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#3bd2d7",
          "marker-size": "medium",
          "marker-symbol": "2",
          "CAT_CODE": "zagreb"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            15.981919,
            45.8150108
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#dc1000",
          "marker-size": "medium",
          "marker-symbol": "",
          "CAT_CODE": "novisad",
          "moj_filter": "mojfilter"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            19.8335496,
            45.2671352
          ]
        }
      }
    ]
  };


///////


/*
var map = new mapboxgl.Map('map', 'mapbox.light') 
    .setView(
        [-2.216794295951928, 51.74450005664403], // change - vars
        6
    );
*/

map.featureLayer.setGeoJSON(featureLayerGeoJSON);

var filters = document.getElementById('filters')

var makeCheckboxes = function() {
    var typesObj = {}, types = [];

    map.featureLayer.eachLayer(function (entity) {
        typesObj[entity.feature.properties['CAT_CODE']] = true;
    })

    for (var k in typesObj) types.push(k);

    var checkboxes = [];
    for (var i = 0; i < types.length; i++) {
        var item = filters.appendChild(document.createElement('div'));
        var checkbox = item.appendChild(document.createElement('input'));
        var label = item.appendChild(document.createElement('label'));
        checkbox.type = 'checkbox';
        checkbox.id = types[i];
        checkbox.checked = true;
        label.innerHTML = types[i]
        label.setAttribute('for', types[i]);
        checkbox.addEventListener('change', update);
        checkboxes.push(checkbox);
    }

    // Called whenever checkbox is changed
    function update() {
        var enabled = {};
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) 
            enabled[checkboxes[i].id] = true;
        }

        map.featureLayer.setFilter(function(feature) {
            return(feature.properties['CAT_CODE'] in enabled);
        });
    }
}

makeCheckboxes()