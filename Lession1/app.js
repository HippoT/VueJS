

Vue.component('blog-post', {
    props: ['post'],
    template: `
      <div class="blog-post">
        <h3>{{ post.title }}</h3>
        <button v-on:click="$emit('enlarge-text',post.id)">
          Enlarge text
        </button>
        <div v-html="post.content"></div>
      </div>
    `
});
new Vue({
    el: '#blog-posts-events-demo',
    data: {
        posts: [
            { id: 1, title: 'My journey with Vue', fontSize: 1 },
            { id: 2, title: 'Blogging with Vue', fontSize: 1 },
            { id: 3, title: 'Why Vue is so fun', fontSize: 1 }
        ],
        postFontSize: 1
    },
    methods:{
        onEnlargeText: function (id) {
            for(var i = 0; i < this.posts.length; i++){
                if(this.posts[i].id == id){
                    this.posts[i].fontSize += 0.1;
                }
            }
          }
    }
});


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

// new Vue({
//     el: "#vue-app",
//     data: {
//         health: 100,
//         ended: false
//     },
//     methods:{
//         punchClick: function(){
//             this.health -= 10;
//             if(this.health <= 0){
//                 this.ended = true;
//             }
//         },
//         restartClick: function(){
//             this.ended = false;
//             this.health = 100;
//         }
//     }
// });