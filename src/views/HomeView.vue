<template>
  <div>
    <header-navigation></header-navigation>
    <div class="home">

      <div>
        <img alt="Gemupurasu logo" src="../assets/logo.png">
        <HelloWorld msg="ゲーム プラス"/>
      </div>

    </div>
  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HeaderNavigation from "@/components/HeaderNavigation";

export default {
  name: 'HomeView',
  components: {
    HeaderNavigation,
    HelloWorld
  }
}
</script>

<style>
.home{
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  min-height: 95vh;
}
</style>
