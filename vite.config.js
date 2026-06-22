import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // இந்த வரியைச் சேர்க்கவும்

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // இதையும் சேர்க்கவும்
  ],
})