<template>
  <div>
    <iframe :src="gamePath" id="gameContainer">

    </iframe>
  </div>
</template>

<script>
export default {
  name: "PlayGames",
  props:['gameName'],
  data () {
    return {
      publicPath: process.env.BASE_URL,
      titleList:[{thisGameName:"air-basket",thisGameTitle:"空气篮球"}]
    }
  },
  methods:{
    assignTitle(){
      this.titleList.forEach((item)=>{
        if(this.gameName === item.thisGameName){
          document.title = item.thisGameTitle;
        }
      })
    }
  },
  computed:{
    gamePath(){
      return this.publicPath + this.gameName + '/index.html';
    }
  },created() {
    this.assignTitle();
  }

}
</script>

<style scoped>
  iframe{
    border: none;
  }
  #gameContainer{
    height: 100vh;
    width: 100vw;
  }
</style>
