<template>
  <header-navigation ref="navbar"></header-navigation>
  <router-view/>
</template>

<style>
#app {
  font-family: 'Noto Sans SC', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
}

</style>
<script>
import headerNavigation from "@/components/HeaderNavigation";
export default {
  components:{
    headerNavigation
  },
  methods:{
    HideNavbar(){
      this.$refs.navbar
    }
  }
}
</script>
