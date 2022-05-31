// // store/index.js
// import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex);

// export default new Vuex.Store({
//   state () {
//     return {
//       counter: 0
//     }
//   },
//   getters: {
//   },
//   mutations: {
//     INCREMENT(state, payload) {
//       state.counter += payload;
//     },
//     DECREMENT(state, payload) {
//       state.counter -= payload;
//     },
//     RESET(state) {
//       state.counter = 0;
//     }
//   },
//   actions: {
//     increment(context, value) {
//       context.commit('INCREMENT', value)
//     },
//     decrement(context, value) {
//       context.commit('DECREMENT', value)
//     },
//     reset(context) {
//       context.commit('RESET')
//     }
//   }
// })

//The Vue.use(Vuex) like aboth gives an use error
import { createStore } from 'vuex';
import axios from 'axios';
const url = "https://api.countrylayer.com/v2/all"

export const store = createStore({
  state () {
    return {
      counter: 0, 
      loadingStatus: 'notLoading', 
      countries: [], 
      errors: []
    }
  },
  getters: {
  },
  mutations: {
    // mutations voor de counter.
    INCREMENT(state, payload) {
        state.counter += payload;
    },
    DECREMENT(state, payload) {
        state.counter -= payload
    },
    RESET(state) {
        state.counter = 0;
    },
    // mutations voor axios/REST countries
    SET_LOADING_STATUS(state, payload) {
        state.loadingStatus = payload;
    },
    SET_COUNTRIES(state, payload) {
        state.countries = payload;
    },
    CLEAR_COUNTRIES(state) {
        state.countries = []
    },
    ADD_ERROR(state, payload) {
        state.errors = [...state.errors, payload]
    }
},
actions: {
    // actions voor de counter.
    increment(context, value) {
        context.commit('INCREMENT', value)
    },
    decrement(context, value) {
        context.commit('DECREMENT', value)
    },
    reset(context) {
        context.commit('RESET')
    },
    // actions voor de RestCountries API
    fetchCountries(context) {
        // 1. Set loading status
        context.commit('SET_LOADING_STATUS', 'loading');
        // 2. Make http-request - optional you can simulate a delay by wrapping it in a setTimeOut
        //setTimeout(() => {
            axios.get(url)
                .then(result => {
                    context.commit('SET_LOADING_STATUS', 'notloading');
                    context.commit('SET_COUNTRIES', result.data);
                })
                .catch(err => {
                    context.commit('SET_LOADING_STATUS', 'notloading');
                    context.commit('SET_COUNTRIES', []);
                    context.commit('ADD_ERROR', err);
                })
        //}, 1500);
    },
    clearCountries(context) {
        context.commit('CLEAR_COUNTRIES')
    }
}
})