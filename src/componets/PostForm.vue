<template>
  <form action="#">
    <button  @click="createPost" type="submit">add</button>
    <input
        v-model="post.text"
        @input="post.text = $event.target.value"
        type="text">

  </form>
</template>

<script>
export default {
  name: "PostForm",
  data(){
    return{
      post:{
        text:'',
      }
    }
  },
  methods:{
    createPost(){
      this.post.id = Date.now(),
      this.$emit('create',this.post)
      this.post ={
      text:''
      }
    }
  }

}
</script>

<style scoped>

</style>