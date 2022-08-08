<template>
  <div class="home">
    <img alt="Gemupurasu logo" src="../assets/logo.png">
    <HelloWorld msg="ゲーム プラス"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
