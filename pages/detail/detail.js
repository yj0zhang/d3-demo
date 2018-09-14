define(['text!./detail.html','css!./detail.css'], function (template) {

    const Detail = {
        name:'detail',
        template: template,
        data() {
            return {
                input: ''
            }
        },
        methods: {
            historyBack() {
                window.history.back();
            }
        }
    };

    return Detail;

});
