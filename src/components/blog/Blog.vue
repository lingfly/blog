<template>
  <div>
    <Header></Header>
  </div>
  <div style="display: flex; ">
    <BlogAside ></BlogAside>
    <router-view></router-view>
  </div>
</template>

<script>
import BlogAside from "@/components/blog/BlogAside";
import BlogHome from "@/components/blog/BlogHome";
import Header from "@/components/Header";
export default {
  name: "Blog",
  components: {Header, BlogHome, BlogAside}
}
</script>

<style scoped>

</style>