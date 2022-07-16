import { createApp } from "vue";
import Element from "./plugins/element-plus/index";
import "element-plus/dist/index.css";
import "@/styles/index.scss";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 导入svg图标
import "@/icons/index";
import installSvgIcon from "@/icons/index";

const app = createApp(App);
installSvgIcon(app);
app.use(store).use(router).use(Element);
app.mount("#app");
