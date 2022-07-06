<template>
  <NavigationBar v-if="!$route.meta.showNav"></NavigationBar>
  <router-view></router-view>
</template>

<script>
import NavigationBar from "@/layout/NavigationBar";

export default {
  name: 'App',
  components: {
    NavigationBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
