define(['vue-router', './pages/list/list', './pages/detail/detail', './pages/login/login'], function (VueRouter, List, Detail, Login) {

    const routes = [
        { path: '/', alias:'/list', name:'list', component: List, meta: { keepAlive: true } },
        { path: '/detail', name:'detail', component: Detail, meta: { keepAlive: false, requiresAuth: true } },
        { path: '/login', name:'login', component: Login }
    ];

    const router = new VueRouter({
        mode: 'history',
        routes: routes,
        scrollBehavior(to, from, savedPosition) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (savedPosition) {
                        resolve(savedPosition)
                    } else {
                        if (from.meta.keepAlive) {
                            from.meta.savedPosition = document.body.scrollTop;
                        }
                        resolve({ x: 0, y: to.meta.savedPosition || 0 })
                    }
                }, 500)
              })
        }
    });

    let login = false;
    
    router.beforeEach(function(to, from, next) {
        try {
            login = Boolean(sessionStorage.getItem('login'));
        } catch (error) {
            login = false;
        }
        if(to.meta && to.meta.requiresAuth) {
            if(login) {
                next();
            } else {
                next({
                    path: '/login'
                });
            }
        } else {
            next();
        }
    })

    router.push('/');

    return router;
});
