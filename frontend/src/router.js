import Vue from 'vue'
import Router from 'vue-router'
import toysHome from './views/ToyHome.vue'
import appAdd from './views/AppAdd.cmp.vue'
import toyDetails from './views/toyDetails.cmp.vue'
import toyGrafs from './views/toyGrafs.cmp.vue'



Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'toysHome',
            component: toysHome
        },
        {
            path: '/grafs',
            name: 'toysGrafs',
            component: toyGrafs
        },
        {
            path: '/add',
            name: 'toyAdd',
            component: appAdd
        },
        {
            path: '/edit/:id',
            name: 'toyEdit',
            component: appAdd
        },
        {
            path: '/toy/:id',
            name: 'toyDetails',
            component: toyDetails
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})