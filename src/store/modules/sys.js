import api from "@/api/index";
import md5 from "md5";

export default {
  namespaced: true,
  state: () => ({}),
  actions: {
    LOGIN(context, { username, password }) {
      return new Promise((resolve, reject) => {
        api.systemModule
          .login({
            username,
            password: md5(password)
          })
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      });
    }
  }
};
