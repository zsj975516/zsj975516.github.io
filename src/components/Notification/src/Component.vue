<template>
  <div class="notification-box" :style="{zIndex,top}">
    <div class="notification__group">
      <h2 class="notification__title">{{title}}</h2>
      <div class="notification__content">
        <p>{{message}}</p>
      </div>
      <div class="notification__close"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Notification",
    data () {
      return {
        zIndex: 0,
        top: 0,
        title: '提示',
        message: '这是一条不会自动关闭的消息'
      }
    }
  }
</script>

<style scoped lang="scss">
  .notification-box {
    display: flex;
    width: 330px;
    padding: 14px 26px 14px 13px;
    border-radius: 8px;
    box-sizing: border-box;
    border: 1px solid #ebeef5;
    position: fixed;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    transition: opacity .3s, transform .3s, left .3s, right .3s, top .4s, bottom .3s;
    overflow: hidden;
    right: 16px;

    .notification__group {
      margin-left: 13px;

      .notification__title {
        font-weight: 700;
        font-size: 16px;
        color: #303133;
        margin: 0;
      }

      .notification__content {
        font-size: 14px;
        line-height: 21px;
        margin: 6px 0 0;
        color: #606266;
        text-align: justify;

        p {
          margin: 0;
        }
      }

      .notification__close {
        position: absolute;
        top: 18px;
        right: 15px;
        cursor: pointer;
        color: #909399;
        font-size: 16px;
        vertical-align: top;

        &:before {
          content: "x";
          font-family: Consolas, sans-serif;
        }
      }
    }
  }
</style>
