import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages 部署: 如果仓库名是 wemom-frontend，设置 base 为 '/wemom-frontend/'
// 如果使用自定义域名或用户站点，设置为 '/'
export default defineConfig({
  plugins: [react()],
  base: "/wemom-frontend/",
});
