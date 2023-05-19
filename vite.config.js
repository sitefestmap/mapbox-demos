// Config for Vite Vanilla JS Multi-page Apps
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        markers: resolve(__dirname, 'markers.html'),
        routelabels: resolve(__dirname, 'route-labels.html'),
        checkbox: resolve(__dirname, 'checkbox-route-one-page.html'),
      },
    },
  },
})