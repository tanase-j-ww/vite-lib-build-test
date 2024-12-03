import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		lib: {
			entry: {
				index: resolve(__dirname, "src/index.ts"),
				components: resolve(__dirname, "src/components/index.tsx"),
				types: resolve(__dirname, "src/types/index.ts"),
			},
			name: "vite-lib-build-test",
			fileName: (format, entry) =>
				entry === "index" ? `index.${format === "es" ? "js": format}` : `[name]/index.${format === "es" ? "js": format}`,
			cssFileName: "style",
		},
		rollupOptions: {
			external: ["react", "react-dom", "@mui/material", "@emotion/react", "@emotion/styled"],
      output: {
        globals : {
          react:'React',
          "react-dom": "ReactDOM",
          "@mui/material": "Mui",
          "@emotion/react": "Emotion",
          "@emotion/styled": "Styled",
        }
      }
		},
	},
});
