import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import prerender from 'vite-plugin-prerender';
import path from "path";
import { createServer } from "./server";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: ["./client", "./shared"],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    },
  },
  build: {
    outDir: "dist/spa",
  },
  plugins: [
    react(),
    prerender({
      staticDir: path.join(__dirname, 'dist/spa'),
      routes: ['/'],
      renderer: '@prerenderer/renderer-puppeteer',
      server: {
        port: 8080,
        host: 'localhost',
        prefix: '/'
      },
      postProcess(renderedRoute) {
        renderedRoute.html = renderedRoute.html
          .replace(/http:/i, 'https:')
          .replace(/(https:\/\/)?(localhost|127\.0\.0\.1):\d*/i, 'https://ortobomgoiania.com.br');
        return renderedRoute;
      }
    }),
    expressPlugin()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // Only apply during development (serve mode)
    configureServer(server) {
      const app = createServer();

      // Add Express app as middleware to Vite dev server
      server.middlewares.use(app);
    },
  };
}
