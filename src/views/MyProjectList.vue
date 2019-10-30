<template>
  <div class="my-project-list">
    <div class="project-item" v-for="item in projectList" :key="item.id" @click="openUrl(item.html_url)">{{item.name}}</div>
  </div>
</template>

<script>
  const github = require('../util/github')
  export default {
    name: "MyProjectList",
    data () {
      return {
        projectList: []
      }
    },
    async mounted () {
      this.projectList = await github.getRepos()
    },
    methods: {
      openUrl (url) {
        window.open(url)
      }
    }
  }
</script>

<style scoped lang="scss">
  .my-project-list {

  }
</style>
