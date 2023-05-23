# [Mapbox Demos](https://sitefest-mapbox-demos.netlify.app/)


```sh
pnpm i @mapbox/mapbox-directions
```

```js
import MapboxDirections from '@mapbox/mapbox-gl-directions';

mapboxgl.accessToken = //....

const map = new mapboxgl.Map({
    // etc
})

const directions = ({
    // config options
})

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
        directions, 
    }),
    'top-left'
);
```