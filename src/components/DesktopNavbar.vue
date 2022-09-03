<template>
  <div class="header-navigation-container" :class="{'is-absolute-position':isAbsolutePosition}">
    <div class="header-navigation-content">
      <router-link to="/">
        <div class="header-navigation-logo">
          <img src="../assets/nav-logo.png">
        </div>
      </router-link>

      <div class="header-navigation-tabs">
        <link-text text="视频" link="/video"></link-text>
        <link-text text="文章" link="/articles"></link-text>
        <link-text text="游戏" link="/game"></link-text>
      </div>
    </div>
  </div>
</template>

<script>
import LinkText from "@/components/LinkText";

export default {
  name: 'DesktopNavbar',
  props: {
    isAbsolutePosition: {
      type:Boolean,
      default:true
    }
  },
  components: {
    LinkText,
  }
}
</script>

<style scoped>
.is-absolute-position{
  position: absolute;
}
.header-navigation-container {
  width: 100%;
  height: auto;
  display: flex;
  overflow: auto;
  align-items: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.48);
  backdrop-filter: blur(15px);
}
.header-navigation-content {
  top: 0px;
  left: 0px;
  width: 100%;
  display: flex;
  padding: 15px 168px;
  box-sizing: border-box;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  border-radius: 0px 0px 0px 0px;
  justify-content: space-between;
}
.header-navigation-logo {
  display: flex;
  position: relative;
  box-sizing: border-box;
  align-items: center;
  border-color: transparent;
  border-radius: 0px 0px 0px 0px;
}
.header-navigation-text {
  color: rgba(91, 91, 91, 1);
  height: auto;
  margin: 0 0 0 0;
  font-size: 24px;
  align-self: auto;
  font-style: Bold;
  text-align: left;
  font-family: Noto Sans SC,sans-serif;
  font-weight: 700;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.header-navigation-tabs {
  gap: 30px;
  display: flex;
  position: relative;
  box-sizing: border-box;
  align-items: center;
  border-color: transparent;
  border-radius: 0px 0px 0px 0px;
}
.hide{
  top: -75px;
  transition: .7s;
}
</style>
