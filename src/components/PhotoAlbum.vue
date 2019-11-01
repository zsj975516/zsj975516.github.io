<template>
  <div class="photo-album-box">
    <div class="photo-album-title">{{data.photo_album_name}}</div>
    <photo class="photo" :data="item" v-for="(item,index) in photoList" :key="index"></photo>
  </div>
</template>

<script>
  import Photo from './Photo'

  const path = require('path')

  const photos = ['1.jpg', '2.jpg', '3.jpg', '4.png', '5.jpg', '6.jpg', '7.jpg', '8.jpg']
  export default {
    name: "PhotoAlbum",
    components: {Photo},
    props: {data: Object},
    data () {
      return {
        photoList: []
      }
    },
    mounted () {
      // console.log(this.data)
      console.log(this.data.objectId)

      for (let i = 0; i < 3; i++) {
        const index = Math.round(Math.random() * 10) % photos.length
        this.photoList.push({
          src: photos[index],
          name: path.basename(photos[index]),
          createTime: new Date().toLocaleString()
        })
        console.log(index)
      }
    }
  }
</script>

<style scoped lang="scss">
  .photo-album-box {
    .photo-album-title {
      font-size: 32px;
      line-height: 1.1;
      margin: 0.67em 0;
    }

    .photo {
      display: inline-block;
      width: calc((100% - 40px) / 3);
      height: 240px;
      margin-right: 20px;

      &:nth-last-child(1) {
        margin-right: 0;
      }
    }
  }
</style>
