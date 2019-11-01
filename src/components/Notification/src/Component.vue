<template>
  <div class="notification-box"
       :style="{zIndex,top}"
       @mouseover="stopTimer"
       @mouseleave="startTimer">
    <!--    <div class="notification__icon" :class="type" v-if="type"></div>-->
    <font-icon class="notification__icon" :href="`#icon-${type}`" v-if="type"></font-icon>
    <div class="notification__group">
      <h2 class="notification__title" v-if="title">{{title}}</h2>
      <div class="notification__content" v-if="message">
        <p>{{message}}</p>
      </div>
      <div class="notification__close" @click="handleClose"></div>
    </div>
  </div>
</template>

<script>
  import FontIcon from '../../FontIcon'

  export default {
    name: "Notification",
    components: {FontIcon},
    data () {
      return {
        zIndex: 0,
        top: 0,
        type: '',
        title: '',
        message: '',
        timeout: 4000,
        timer: null
      }
    },
    mounted () {
      this.startTimer()
    },
    methods: {
      startTimer () {
        if (this.timeout === 0) return

        this.timer = setTimeout(() => {
          if (this._isDestroyed) return
          if (this.handleClose) this.handleClose()
        }, this.timeout)
      },
      stopTimer () {
        if (this.timer !== null) clearTimeout(this.timer)
      },
      handleClose () {
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
    /*transition: opacity .3s, transform .3s, left .3s, right .3s, top .4s, bottom .3s;*/
    transition-duration: 0.4s;
    overflow: hidden;
    margin: auto;
    left: 0;
    right: 0;

    .notification__icon {
      width: 26px;
      height: 26px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: 26px;

      &.error {
        background-image: url("../../../assets/img/error.png");
      }

      & + .notification__group {

      }
    }

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
