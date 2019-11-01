<template>
  <div class="photo-album-box">
    <div class="photo-album-list">
      <photo-album class="photo-album-item" v-for="item in photoAlbumList" :key="item.objectId"
                   :data="item"></photo-album>
    </div>
  </div>
</template>

<script>
  import PhotoAlbum from '../components/PhotoAlbum'

  const photoAlbum = require('../util/photoAlbum')
  export default {
    name: "Photo",
    components: {PhotoAlbum},
    data () {
      return {
        photoAlbumList: []
      }
    },
    async mounted () {
      this.photoAlbumList = await photoAlbum.getAllPhotoAlbum()
    }
  }
</script>

<style scoped lang="scss">
  .photo-album-box {
    .photo-album-list {
      box-sizing: border-box;
      width: 100%;


      .photo-album-item {
        padding: 0 10%;

        &:nth-child(2n+1) {
          background-color: #f2f2f2;
        }
      }
    }
  }
</style>
