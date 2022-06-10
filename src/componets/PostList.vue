<template>
 <div class="posts" v-for="post in posts" :key="post.id">
    {{ post.text }}
  </div>
</template>

<script>
export default {
  name: "PostList",
  props:{
    posts:{
      type:Array,
      required: true,
    }
  }
}
</script>

<style scoped>
.posts{
  border: 2px solid aqua;
  margin: 10px;
  border-radius: 10px;
  padding: 10px;
}
</style>