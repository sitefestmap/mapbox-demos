// Config for Vite Vanilla JS Multi-page Apps
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        markers: resolve(__dirname, 'colored-markers.html'),
        polygon: resolve(__dirname, 'polygon.html'),
        polygoncircle: resolve(__dirname, 'polygon-circle.html'),
        polygonsquare: resolve(__dirname, 'polygon-square.html'),
        polygonpentagon: resolve(__dirname, 'polygon-pentagon.html'),
        polygonmarkerspopups : resolve(__dirname, 'polygon-markers-popups.html'),
        routesymbollayers: resolve(__dirname, 'route-symbol-layers.html'),
        checkbox: resolve(__dirname, 'checkboxes.html'),
      },
    },
  },
})