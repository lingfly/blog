<template>
  <div class="home" >
    <Header></Header>

  </div>
  <router-view></router-view>
<!--  <router-link to="/archive"></router-link>-->
</template>

<script>
// @ is an alias to /src


import Header from "@/components/Header";

export default {
  name: 'HomeView',
  components: {
      Header
  }
}
</script>
