import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@assets": path.resolve(__dirname, "./src/assets"),
			"@icons": path.resolve(__dirname, "./src/assets/icons"),
			"@hooks": path.resolve(__dirname, "./src/hooks"),
			"@pages": path.resolve(__dirname, "./src/pages"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@util": path.resolve(__dirname, "./src/util"),
			"@lib": path.resolve(__dirname, "./src/lib"),
			"@ui": path.resolve(__dirname, "./src/ui"),
			"@context": path.resolve(__dirname, "./src/context"),
			"@layouts": path.resolve(__dirname, "./src/layouts"),
			"@routes": path.resolve(__dirname, "./src/routes"),
		},
	},
	plugins: [react()],
	server: {
		port: 3000,
	},
});
