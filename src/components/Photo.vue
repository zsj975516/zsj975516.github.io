<template>
  <div class="photo-box">
    <img :src="data.src">
    <div class="img-caption">
      <h4>{{data.name}}</h4>
      <p>{{data.createTime}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Photo",
    props: {data: Object}
  }
</script>

<style scoped lang="scss">
  .photo-box {
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
    }

    .img-caption {
      background-color: rgba(0, 0, 0, .64);
      position: absolute;
      /* margin: 0px; */
      padding: 15px;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      visibility: hidden;
      opacity: 0;
      transition: visibility 0.5s, opacity 0.5s;

      h4 {
        font-size: 17px;
        margin-top: 10px;
        margin-bottom: 10px;
        font-weight: 500;
        line-height: 1.1;
        color: #6d9dd1;
      }

      p {
        margin: 0 0 10px;
        color: #6d9dd1;
      }
    }

    &:hover {
      .img-caption {
        opacity: 1;
        visibility: visible;
      }
    }
  }
</style>
