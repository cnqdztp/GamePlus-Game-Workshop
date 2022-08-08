<template>
  <div>
    <header-navigation></header-navigation>
    <div id="not-found-container">
      Not Found
    </div>
  </div>

</template>

<script>
import HeaderNavigation from "@/components/HeaderNavigation";
export default {
  name: "NotFound",
  components: {HeaderNavigation}
}
</script>

<style scoped>
  #not-found-container{
    min-height: 95vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
</style>
