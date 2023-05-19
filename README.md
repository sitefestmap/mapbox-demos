# README

```sh
npm i vite
npm install --save mapbox-gl
```

## Open Studios

- [List of open studio artists](https://docs.google.com/document/d/1SjY9AdOgCvsrdHNwBtMroXakIOYgMFWa/edit)
- [Directory](file:///Users/matthiasweston/Downloads/DIRECTORY_2023_JL_26.04.23.pdf)

## Colors

- Stroud Town Centre (red)
- Valley and Vale (mid blue)
- Bisley (dark blue)
- Slad Valley (orange)
- Golden Valley (purple)
- Nailsworth Valley (green)

## Routes

- 1
    - 1a Liz Lippiatt : Textiles Studio
    - 1b Kathryn Clarke : Textiles Studio
    - 1c Melanie de Gray Birch : Textiles Studio
    - 1d Alanna Gray : Textiles Studio
    - 1e April Shackleton : Textiles Studio
    - 1f Corinne Hockley : Textiles Studio
    - 1g Harry Pegler : 1st Floor Summerfield Studio
    - 1h Lorna Kerr : 1st Floor Summerfield Studio
    - 1i Mair Hughes : 2st Floor Summerfield Studio
    - 1j Daniel Austin : 2st Floor Summerfield Studio
    - 1k Stand + Stare : 2st Floor Summerfield Studio
    - 1l Adam White : Studio 7
    - 1m Zoe Heath : Studio 8
    - 1n Jo Casling : Studio 9
    - 1o Lola Henderson : Studio 10
    - 1p Lily Ryan : Studio 11
    - 1q Jimmy Croft : Studio 12
    - 1r Evie-Lola Minney : Studio 12
    - 1s Athene Greig : Studio 13
    - 1t Abigail Ford : Studio 14
    - 1u Archie Taylor-Roach : Studio 14
    - 1v Kelly O’Brien : Studio 15
    - 1w Hatty Frances Bell : Studio 15
    - 1x Ritu Sood : Studio 16
    - 1y Aimee Lax : Sculpture 1
    - 1z Ann-Margreth Bohl : Sculpture 3
    - 1aa Emily Joy : Sculpture 4
    - 1ab Kes Wilkie : Sculpture 5
    - 1Ac Alison Cockroft : Sculpture 6
    - 1Ad Gallery info
    - 2 Nicola Builder : Weven, 21 George Street
    - 3a Henry MacKeith : First Floor Cacao Circle
    - 3b Danny Spinner : Second Floor Cacao Circle
    - 4a Katie Beard : 44 High St
    - 4b Jessica Taylor : 44 High St
- Route 2
    - 5 Kirsty Tallon
- 3

- 4

- 5

- 6




## Coordinates: 

- [Map Coordinates](https://www.mapcoordinates.net/en)


## Debugging

- [Discord](https://discord.com/channels/1004826913229000704/1004826913229000707)

### Data

Datasets are collections of geojson data.
Create dataset , publish into a tileset, add to style in style editor, update data, 

- [Data](https://docs.mapbox.com/help/getting-started/creating-data/)
[(https://stackoverflow.com/questions/61091943/how-to-import-a-dataset-directly-into-my-javascript-code)]

### Lines

- [Lines](https://docs.mapbox.com/mapbox-gl-js/example/geojson-line/?size=n_10_n)

### Markers

- [Markers Youtube](https://www.youtube.com/watch?v=Ldw3mFGyjDE&list=PL86WBCjNmqh5HQInLsyYW7g76_6eKcQLf)
- [Add Markers](https://docs.mapbox.com/help/getting-started/add-markers/)
- [Generic Markers](https://docs.mapbox.com/studio-manual/examples/custom-icons-generic-markers/)
- [Custom Markers](https://docs.mapbox.com/help/tutorials/custom-markers-studio-video)
- [Popup on click](https://docs.mapbox.com/mapbox-gl-js/example/popup-on-click/)
- [Add Points : Interactivity](https://docs.mapbox.com/help/tutorials/add-points-pt-3/)

### Layers

 - [CSS Markers](https://stackoverflow.com/questions/54313355/mapbox-gl-pure-css-markers-with-numbers/54313904#54313904)

### Polygons

Polygon tileset contains single named boundaries_{type}_{level}
(Boundary-type_Level-number)

- [Show Polygon Popup on click](https://docs.mapbox.com/mapbox-gl-js/example/polygon-popup-on-click/)

## APIs

### Tilequery API

Get data without having to render

- [Tilequery API](https://docs.mapbox.com/api/maps/tilequery/)
- [Tilequery Playground](https://docs.mapbox.com/playground/tilequery/)

### Geocoding API

Text to geojson coordinates

- [Geocoding](https://docs.mapbox.com/api/search/geocoding/)
- [Geocoder Plugin](https://github.com/mapbox/mapbox-gl-geocoder)
- [Local Search](https://docs.mapbox.com/help/tutorials/local-search-geocoding-api/)

```sh
curl "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWF0dGhpYXN3ZXN0b24iLCJhIjoiY2xlNHIya255MDJqaTNwbXY5NjUzdWgzYSJ9.af8OJ3gOuIiOvKkYllihGQ"
```
    
#### Reverse Geocoding

Reverse Geocoding takes in coordinates and returns features

```sh
curl "https://api.mapbox.com/geocoding/v5/mapbox.places/-73.989,40.733.json?access_token=pk.eyJ1IjoibWF0dGhpYXN3ZXN0b24iLCJhIjoiY2xlNHIya255MDJqaTNwbXY5NjUzdWgzYSJ9.af8OJ3gOuIiOvKkYllihGQ"
```

Batch Geocoding : Each coordinate = 1 request

### Directions API

- [Add a line to a map](https://docs.mapbox.com/mapbox-gl-js/example/geojson-line/)
- [Directions API Playground](https://docs.mapbox.com/playground/directions/)
- [Directions API](https://docs.mapbox.com/api/navigation/directions/)
- [Get Started Directions API](https://docs.mapbox.com/help/tutorials/getting-started-directions-api/)
- [Locate the User](https://docs.mapbox.com/mapbox-gl-js/example/locate-user/)

### Search Box API

Interactive location search

- [Search Box](https://docs.mapbox.com/api/search/search-box/)
- [Search Box Playground](https://docs.mapbox.com/playground/search-box/)

#### Polygon Boundaries

- [Polygon Boundaries](https://docs.mapbox.com/help/tutorials/point-in-polygon-query-with-mapbox-boundaries/)
- [Contact Sales](https://www.mapbox.com/contact/sales/)

## Styles

- [Styles](https://docs.mapbox.com/studio-manual/reference/styles/)
- [Add a custom font to a map style with Studio])https://docs.mapbox.com/help/tutorials/add-custom-font-studio-video/)
- [Add a Mapbox style to a CARTO map](https://docs.mapbox.com/help/tutorials/carto/)
- [Add generic marker images])https://docs.mapbox.com/studio-manual/examples/custom-icons-generic-markers/)
- [Map Style with Cartogram](https://docs.mapbox.com/help/tutorials/create-new-map-style-with-cartogram-video/)

## Checkboxes array of queries
    
- [(https://gis.stackexchange.com/questions/244533/creating-filter-checkboxes-for-google-maps-javascript-web-map)]
- [Filter Google Map Checkboxes ( Mapbox + Jquery)](https://codepen.io/apsolut/pen/rWGEWV)  
- [(https://www.fla-shop.com/howto/interacting-with-maps-via-checkboxes/)]


## Filter

- [Filter symbols by text input](https://codepen.io/slee133/pen/gOrJaLa)
- [Filter Example](https://codepen.io/kerrybannen/pen/GRBvpOe)
https://codepen.io/edcolco/pen/PoqxNaj
- [](https://www.youtube.com/watch?v=A3VGyecSAEM)