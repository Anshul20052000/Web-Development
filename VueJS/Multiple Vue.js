var source = new Vue({
    el:'#source',

    data:{
        Value:1234,
        Price:1230093,
    },

    methods:{
        fun1 : function(){
            return app.Price;
        },
    }
});
var destination = new Vue({
    el:'#destination',

    data:{
        Value:4567,
    },

    methods:{
        fun1 : function(){
            return source.Price;
        },
    }
});
