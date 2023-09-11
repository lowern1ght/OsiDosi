import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'

export default () => {
  const port = 3000;

  return  defineConfig({
    plugins: [react()],
    envPrefix: 'OSI',
    server: {
      host: true,
      strictPort: true,
      port: port,
      watch: {
        usePolling: true
      }
    },
    preview: {
      port: port
    }
  })
}