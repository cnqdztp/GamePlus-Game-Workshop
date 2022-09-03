<template>
  <div class="btn-text-container" >
    <router-link :to="link" class="btn-text-content">
      <span class="btn-text-text">{{text}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'LinkText',
  props:{
    text: {
      type: String,
      default: 'Button'
    },
    link:{
      type:String,
      default: '/'
    }
  }
}
</script>

<style scoped>

.btn-text-container {
  display: flex;
  position: relative;
}
a{
  border-bottom: solid 2px transparent;
  text-decoration: none;
}

a:hover{
  border-bottom: solid 2px rgba(91, 91, 91, 0.6);
  transition: 0.3s;
}

a.router-link-active{
  border-bottom: solid 2px #5B5B5B !important;
  transition: 0.3s;
}
/*a{*/
/*  text-decoration: none;*/
/*  display: flex;*/
/*  position: relative;*/
/*  box-sizing: border-box;*/
/*  transition: 0.3s;*/
/*  align-items: center;*/
/*  border-color: transparent;*/
/*  border-bottom-width: 2px;*/
/*  border-top-width: 0px;*/
/*  border-left-width: 0px;*/
/*  border-right-width: 0px;*/
/*  border-radius: 0px 0px 0px 0px;*/
/*  margin: 0px 3px;*/
/*  justify-content: center;*/
/*  background-color: transparent;*/
/*}*/
/*.btn-text-content {*/
/*  border-color: rgba(91, 91, 91, 0.6);*/
/*  border-bottom-width: 2px;*/
/*  border-top-width: 0px;*/
/*  border-left-width: 0px;*/
/*  border-right-width: 0px;*/
/*}*/
/*.router-link-active {*/
/*  */
/*  border-color: #5B5B5B;*/
/*  border-width: 2px !important;*/
/*  border-top-width: 0px;*/
/*  border-left-width: 0px;*/
/*  border-right-width: 0px;*/
/*}*/
.btn-text-text {
  color: #5B5B5B;
  height: auto;
  font-size: 20px;
  align-self: center;
  text-align: left;
  font-family: Noto Sans SC,sans-serif;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
</style>
