import vercel from "vite-plugin-vercel";
import vikeSolid from "vike-solid/vite";
import vike from "vike/plugin";
import devServer from "@hono/vite-dev-server";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
	plugins: [
		devServer({
			entry: "hono-entry.ts",

			exclude: [
				/^\/@.+$/,
				/.*\.(ts|tsx|vue)($|\?)/,
				/.*\.(s?css|less)($|\?)/,
				/^\/favicon\.ico$/,
				/.*\.(svg|png)($|\?)/,
				/^\/(public|assets|static)\/.+/,
				/^\/node_modules\/.*/,
			],

			injectClientScript: false,
		}),
		vike({
			prerender: true,
		}),
		vikeSolid(),
		vercel(),
	],
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
});
