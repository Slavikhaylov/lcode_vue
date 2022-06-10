<template>
<div class="app">
  <post-form @create="createPost">
  </post-form>
  <post-list :posts="posts" >
  </post-list>

</div>

</template>

<script>
import PostForm from "@/componets/PostForm";
import PostList from "@/componets/PostList";
export default {
  components:{
    PostList, PostForm
  },
  data(){
    return{
      posts:[
        {id: 1 , text:'sadsadasd1'},
        {id: 2 , text:'sadsadassdad2'},
        {id: 3 , text:'sadsadassadasdd3'},
        {id: 4 , text:'sadsadsadasdsaasd4'},
      ],
    }
  },
  methods:{
    createPost(post){
      this.posts.push(post)
    }
  }
}
</script>

<style>
body{
  /*background: darkgrey;*/
}

</style>