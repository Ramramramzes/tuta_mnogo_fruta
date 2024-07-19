import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

const serverPath = path.resolve(__dirname, 'src/server');
const SERVER = 'http://localhost:3001'


export default defineConfig({
  plugins: [react()],
  server:{
    proxy: {
      '/products': SERVER,
    }
  }
})
