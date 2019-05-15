import ParentView from '@/components/parent-view'
export const routers =[
                {
                    name:'home',
                    path:'home',
                    component: ParentView,
                    meta:{
                        title: '首页',
                        notCache: true,
                        icon: 'md-home',
                        top:true
                    }
                },
                {
                    name: 'jobs',
                    path: '/jobs',
                    component:ParentView,
                    meta:{
                        top:true
                    },
                    children: [
                        {
                            name: 'jobsadd',
                            path: 'jobsadd',
                            component: ParentView,
                            children: [
                                {
                                    name: 'a',
                                    path: 'a',
                                    component: () => import('_v/jobs/add.vue'),
                                },
                                {
                                    name: 'b',
                                    path: 'b',
                                    component: () => import('_v/jobs/post.vue'),
                                },
                                {
                                    name: 'c',
                                    path: 'c',
                                    component: () => import('_v/jobs/put.vue'),
                                },

                            ]
                        },
                        {
                            name: 'jobspost',
                            path: 'jobspost',
                            component: () => import('_v/jobs/post.vue'),
                        },
                        {
                            name: 'jobsput',
                            path: 'jobsput',
                            component: () => import('_v/jobs/put.vue'),
                        },

                    ]
                },
                {
                    name: 'stat',
                    path: '/stat',
                    component:ParentView,
                    meta:{
                        top:true
                    },
                    children: [
                        {
                            name: 'statadd',
                            path: 'statadd',
                            component: () => import('_v/stat/add.vue'),
                        },
                        {
                            name: 'statpost',
                            path: 'statpost',
                            component: () => import('_v/stat/post.vue'),
                        },
                        {
                            name: 'statput',
                            path: 'statput',
                            component: () => import('_v/stat/put.vue'),
                        },

                    ]
                },
                {
                    name:'other',
                    path: '/other',
                    component: ParentView,
                    meta:{
                        top:true
                    },
                },
            ]


