import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "burger-33", // <repo-name> kısmını GitHub’daki depo adıyla değiştirin
});
