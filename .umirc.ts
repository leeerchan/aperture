import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/file", component: "file" },
    { path: "/result", component: "result" },
    { path: "/login", component: "login" },
    { path: "/register", component: "register" },
    { path: "/home", component: "home" },
  ],
  npmClient: 'yarn',
});
