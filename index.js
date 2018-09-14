define(['vue', './router'], function (Vue, router) {

    const app = new Vue({
        el:'#app',
        router,
        // template: '<div class="pages"><router-view></router-view></div>'
        data() {
            return {
                transitionName: ''
            }
        },
        watch: {
            '$route' (to, from) {
              const toPath = to.path;
              this.transitionName = toPath === '/detail' ? 'slide-bottom' : '';
            }
          }
          
    });

});
