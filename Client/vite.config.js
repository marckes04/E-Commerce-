import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // 1. Tailwind va aquí (como hermano de react, no como hijo)
    tailwindcss(),

    // 2. El plugin de React
    react({
      babel: {
        plugins: [
          // Aquí solo van plugins de Babel (como el compilador de React)
          // Nota: Solo deja esta línea si instalaste 'babel-plugin-react-compiler'
          ['babel-plugin-react-compiler'], 
        ],
      },
    }),
  ],
})