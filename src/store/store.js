import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import * as getters from "./getters";
import * as mutations from "./mutations";
export const store = new Vuex.Store({
  state: {
    myArray:[]
  },
  getters,
  mutations
  
});
