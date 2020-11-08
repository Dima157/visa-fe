import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

const AuthService = {
    init() {
        Vue.use(VueAxios, axios);
        Vue.axios.defaults.baseURL = process.env.api_url;

        this.setAuthorizationHeaders();
    },

    setHeader(headers) {
        headers.forEach((value, header) => {
            Vue.axios.defaults.headers.common[
                [header]
                ] = value;
        })
    },

    setAuthorizationHeaders() {
        //Todo: need to set JWT token
    },

    get(resource, slug = "") {
        return Vue.axios.get(`${resource}/${slug}`).catch(error => {
            throw new Error(`[RWV] ApiService ${error}`);
        });
    },

    post(resource, params) {
        return Vue.axios.post(`${resource}`, params);
    },

    update(resource, slug, params) {
        return Vue.axios.put(`${resource}/${slug}`, params);
    },

    put(resource, params) {
        return Vue.axios.put(`${resource}`, params);
    },

    delete(resource) {
        return Vue.axios.delete(resource).catch(error => {
            throw new Error(`[RWV] ApiService ${error}`);
        });
    }
};

export default AuthService
