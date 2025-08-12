// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
	integrations: [
		tailwind({
			configFile: "./tailwind.config.js",
		}),
		react(),
	],
	output: "static",
	build: {
		assets: "assets",
	},
});
