define(['text!./list.html', 'css!./list.css'], function (template) {

    const List = {
        name:'list',
        template: template,
        data() {
            return {
                list: [],
                input: ''
            }
        },
        methods:{
            loadData(){
                let index = this.list.length===0?0:this.list.slice(-1)[0]+1;
                const list = [];
                for(let i=0;i<10;i++){
                    list.push(index++);
                }
                this.list = this.list.concat(list);
            },
            infiniteHandler($state) {
                const self = this;
                setTimeout(() => {
                    self.loadData();
                    $state.loaded();
                }, 300);
            },
        }
    };

    return List;

});
