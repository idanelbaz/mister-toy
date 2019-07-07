import toyStore from '../src/modules/toyStore.js'
import userStore from '../src/modules/userStore.js'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    strict: true,

    modules: {
        toyStore,
        userStore
    }
})

export default store;