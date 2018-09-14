define(['text!./login.html', 'css!./login.css'], function (template) {
    return {
        name:'login',
        template: template,
        methods: {
            login() {
                sessionStorage.setItem('login', true);
                this.$router.push({
                    path: '/list'
                });
            }
        }
    };
});
