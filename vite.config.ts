import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { pigment } from "@pigment-css/vite-plugin";

const theme = {
  palette: {
    primary: { main: "#ff4500", light: "#ff6a00", dark: "#cc3300" },
    secondary: { main: "#00ff00", light: "#66ff66", dark: "#00cc00" },
  },
  typography: { fontFamily: "Arial, sans-serif" },
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [pigment({ theme }), react()],
  optimizeDeps: {
    include: ["prop-types", "react-is"],
  },
});
