import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid';
import { base64 } from 'rollup-plugin-base64';

export default defineConfig({
  plugins: [solid(), base64({
    include: ['**/*.mp3']
  })],
  assetsInclude: [
    '.mp3'
  ]
})
