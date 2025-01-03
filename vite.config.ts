import devServer from '@hono/vite-dev-server'
import mdx from '@mdx-js/rollup'
import devtools from 'solid-devtools/vite'
import { pages } from 'vike-cloudflare'
import vikeSolid from 'vike-solid/vite'
import vike from 'vike/plugin'
import { defineConfig } from 'vite'
import banner from 'vite-plugin-banner'
import paths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    vike({
      prerender: false,
    }),
    pages({
      server: {
        kind: 'hono',
        entry: './src/server/production.ts',
      },
    }),
    devServer({
      entry: './src/server/entry.ts',
      exclude: [
        /^\/@.+$/,
        /.*\.(ts|tsx|vue)($|\?)/,
        /.*\.(s?css|less)($|\?)/,
        /^\/favicon\.ico$/,
        /.*\.(svg|png)($|\?)/,
        /^\/(public|assets|static)\/.+/,
        /^\/node_modules\/.*/,
        /.*\.(mdx?)($|\?)/,
      ],
      injectClientScript: false,
    }),
    {
      enforce: 'pre',
      ...mdx({
        jsxImportSource: 'solid-jsx',
      }),
    },
    vikeSolid(),
    paths(),
    devtools({
      autoname: true,
      locator: {
        targetIDE: 'vscode',
        componentLocation: true,
        jsxLocation: true,
      },
    }),
    banner('2024 Zeithrold https://github.com/zeithrold/blog | Licensed under MIT'),
  ],
  build: {
    target: 'es2022',
    rollupOptions: {
      treeshake: 'recommended',
      output: {
        entryFileNames: 'assets/entries/entry-[hash].js',
        chunkFileNames: 'assets/chunks/chunk-[hash].js',
      },
    },
  },
})
