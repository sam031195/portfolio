import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  base: "/portfolio/", // Base path for sam031195.github.io/portfolio/
})

