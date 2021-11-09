import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import tsconfigpaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), svgr(), tsconfigpaths()]
})
