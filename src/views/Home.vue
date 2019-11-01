<template>
  <div class="home">
    <button @click="logout">退出登录</button>
  </div>
</template>

<script>
  const Bmob = require('../util/bmob')

  export default {
    name: 'home',
    components: {},
    methods: {
      async logout () {
        await Bmob.logout()
        this.$router.replace('/login')
      }
    }
  }
</script>
