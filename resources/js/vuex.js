import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const state = {
    user: null,
    lng: 'ur'
};

const store = new Vuex.Store({
    state,
    getters: {
        user: (state) => {
            return state.user;
        },
        locale: (state) => {
            return state.lng;
        }
    },
    actions: {
        user: (context, user) => {
            context.commit('user', user);
        },
        setLocale: (context, lng) => {
            context.commit('locale', lng);
        }
    },
    mutations: {
        user: (state, user) => {
            state.user = user;
        },
        locale: (state, lng) => {
            state.lng = lng;
        }
    },
    plugins: [createPersistedState()]
});

export default store;
