Vue.component('mycomponent',{
    template:'<p>This is my Component {{ name }} - {{ temperature }} <button v-on:click="changeTemp()">Click Here</button></p>',
    data : function(){
        return{
            name:'John',
            temperature:100,
        }
    },
    methods:{
        changeTemp:function(){
            this.temperature += 10;
        }
    }
})



var application = new Vue({
    el:'#app',

    data:{
        message:'Hello World',
        name:'ABC',
        price:'1000',
        path:'https://images.unsplash.com/photo-1627037558426-c2d07beda3af?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        link:'https://www.google.com',
        temp:'0',
        message2:'',
        status:false,
        gate:false,
        Students:['Anshul',"Manish",'Harshit','Ayush','Aryan','Anubhav'],
        Players:[
            {Name:'Anshul',Sccre:10},
            {Name:'Manish',Sccre:20},
            {Name:'Ayush',Sccre:30},
            {Name:'Aryan',Sccre:40},
            {Name:'Harshit',Sccre:50},
            {Name:'Anubhav',Sccre:60}
        ],

        Value:123,
        Price:2001010,
        years:2,
        rate:12,
        intr:'',

    },

    methods:{
        discount : function(d = 100){
            cost = this.price - d;
            return cost;
        },
        inc : function(){
            this.temp++;
        },
        dec : function(){
            this.temp--;
        },
        keypressed : function(){
            console.log("Key Pressed");
        },
        intrest : function(){
            this.intr = this.$refs.principle.value * this.years * this.rate;
        },

    }
});