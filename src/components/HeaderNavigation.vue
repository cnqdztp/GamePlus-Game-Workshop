<template>
  <div class="desktop-navbar" v-if="!isMobile">
    <desktop-navbar>
    </desktop-navbar>
  </div>
  <div class="mobile-navbar" v-else>
    <mobile-navbar></mobile-navbar>
  </div>
</template>

<script>

import DesktopNavbar from "@/components/DesktopNavbar";
import MobileNavbar from "@/components/MobileNavbar";
export default {
  name: 'HeaderNavigation',
  props: {

  },
  components: {
    MobileNavbar,
    DesktopNavbar
  }
  ,beforeCreate() {
    if(window.innerWidth<750){
      this.isMobile = true;
    }
  },data(){
    return{
      isMobile: false
    }
  }
}
</script>

<style scoped>


</style>
