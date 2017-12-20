import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
  const router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/readme',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/page/Readme.vue'], resolve)
                },
                {
                    path: '/basetable',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve)
                },
                {
                    path: '/vuetable',
                    component: resolve => require(['../components/page/VueTable.vue'], resolve)     // vue-datasource组件
                },
                {
                    path: '/report',
                    component: resolve => require(['../components/page/report/report.vue'], resolve)
                },
                {
                    path: '/reportlist',
                    component: resolve => require(['../components/page/report/list.vue'], resolve)   
                },
                {
                    path: '/baseform',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve)
                },
                {
                    path: '/hospital',
                    component: resolve => require(['../components/page/hospital/list.vue'], resolve)    // 医院管理
                },
                {
                    path: '/account',
                    component: resolve => require(['../components/page/system/account_list.vue'], resolve)    // 管理员管理
                }
                ,
                {
                    path: '/updatepassword',
                    component: resolve => require(['../components/page/system/updatepassword.vue'], resolve)    // 管理员管理
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        }
    ]
})
router.beforeEach((to, from, next) => {
    if (to.matched[0].path.indexOf('login') === -1) {
      if (!window.is_login) {
        next({ path: '/login' })
        return
      }
    }
    next()
})

export default router