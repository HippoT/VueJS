// new Vue({
//     el: '#vue-app',
//     data: {
//         name: "Tran minh tuan",
//         job:'Developer',
//         website: "https://vuejs.org/v2/guide/installation.html",
//         websiteTag: '<a href="https://vuejs.org/v2/guide/installation.html">Vue JS website 2</a>',
//         age: 25,
//         x: 0,
//         y: 0
//     },
//     methods:{
//         greet: function(time){
//             var name = this.name;
//             return 'Good ' + time + ' ' + name;
//         },
//         add: function(inc) {
//             this.age += inc;
//         },
//         sub: function(dec) {
//             this.age -= dec;
//         },
//         mouseMove: function(event) {
//             this.x = event.offsetX;
//             this.y = event.offsetY;
//         }
//     }
// });

new Vue({
    el: "#vue-app",
    data: {
        health: 100,
        ended: false
    },
    methods:{
        punchClick: function(){
            this.health -= 10;
            if(this.health <= 0){
                this.ended = true;
            }
        },
        restartClick: function(){
            this.ended = false;
            this.health = 100;
        }
    }
});