import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/main'
import ParentView from '@/components/parent-view'

import {routers} from "./routers";

Vue.use(Router)

const router = new Router({
        routes: [
            {
                name: '_home',
                path: '/',
                redirect: '/home',
                component: Main,
                children: [...routers]
            },

        ]
    })
router.beforeEach((to, from, next) => {
    console.log(to.matched)
    console.log(from)
    if(!from.name){
        next(to.matched)
    }
    next()

})
export default router