import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        open: true,
    },
    build: {
        // Même dossier qu'avec Create React App (utilisé par build-and-zip)
        outDir: "build",
    },
});
