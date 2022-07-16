import { createStore } from "vuex";
import userModule from "./modules/sys";

export default createStore({
  modules: {
    userModule
  }
});
