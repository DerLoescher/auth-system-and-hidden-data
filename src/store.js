import { createStore } from "vuex";
import Api from "./api";
import router from "./router";

const store = createStore({
  state: {
    key: "",
    anyKey: "",
  },
  mutations: {
    responseCatched(state, [data, siteId]) {
      if (data.message === "ok") {
        state.key = siteId;
        document.cookie = `key=${siteId}`;
        // localStorage.setItem("leadhit-site-id", JSON.stringify(siteId));
        router.push("/analytics");
        state.notValidKey = false;
      } else {
        state.key = null;
        state.notValidKey = true;
        setTimeout(() => (state.notValidKey = false), 5000);
        // localStorage.removeItem("leadhit-site-id");
        document.cookie = "key= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
      }
    },
    logOut(state) {
      state.key = null;
      document.cookie = "key= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
      router.replace("/auth");
    },
    getSiteId(state) {
      state.key = document.cookie.split("=")[1];
    },
  },
  actions: {
    async sendSiteId({ commit }, siteId) {
      commit("responseCatched", [await Api.sendSiteId(siteId), siteId]);
    },
  },
});

export default store;
