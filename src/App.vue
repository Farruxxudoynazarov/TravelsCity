<template>
  <div id="app">
    <MainMenu/>
       <router-view/>
     <FooterPage/>
  </div>
</template>


<script>

import MainMenu from '@/components/navbar/MainMenu.vue';
import FooterPage from '@/components/footer/FooterPage.vue'
// import HomeView from '@/views/HomeView.vue'
export default {
  components: {
    MainMenu,
    // HomeView,
    FooterPage
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container {
  max-width: 85%;
  margin: 0 auto;
}

nav {
  padding: 30px;


  a {
    // text-decoration: none;
    font-weight: bold;
    // color: #2c3e50;
    color: coral;
    border-bottom: 1px dotted coral;

    &.router-link-exact-active {
      color: coral;
    }
  }
}
.container {
  max-width: 90%;
  margin: 0 auto;
  padding: 0 10px;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
