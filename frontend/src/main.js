import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store.js'
// import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false
var SocialSharing = require('vue-social-sharing');
Vue.use(SocialSharing);
Vue.use(require('vue-moment'));
import * as VueGoogleMaps from 'vue2-google-maps';

import './scss/main.scss'

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCrVxVPta_TOsFatlYL7vOx_stAJNlV8ws',
        libraries: 'places'
    }
});


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')