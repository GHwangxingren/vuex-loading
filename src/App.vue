<template>
  <div id="app">
    <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
    </keep-alive>   
   <router-view v-else></router-view>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
