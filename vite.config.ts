import { paraglideVitePlugin } from '@inlang/paraglide-js';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        tailwindcss(),
        sveltekit(),
        paraglideVitePlugin({
            project: './project.inlang',
            outdir: './src/lib/paraglide'
        })
    ],
    ssr: {
        noExternal: ['@inlang/paraglide-js']
    },
    server: {
        allowedHosts: ['greencrest.ngrok.dev', 'greencrest.com.br', 'localhost']
    },
    define: {
        global: 'globalThis',
    },
    resolve: {
        alias: {
            crypto: 'crypto-browserify',
            stream: 'stream-browserify',
            util: 'util',
            buffer: 'buffer'
        }
    },
    optimizeDeps: {
        include: ['crypto-browserify', 'stream-browserify', 'util', 'buffer']
    }
});
