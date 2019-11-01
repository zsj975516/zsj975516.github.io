<template>
  <div id="app">
    <router-view class="router-view"/>
  </div>
</template>

<style lang="scss">
  html, body {
    margin: 0;
    padding: 0;
  }

  #app {
    height: 100vh;
    width: 100vw;

    .router-view {
      width: 100%;
      height: 100%;
      overflow-y: auto;
    }
  }
</style>
