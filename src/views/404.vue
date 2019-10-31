<template>
  <div class="not-found-page-box">
    <div class="content">
      <div class="msg">...404 error page...</div>
      <div class="time">{{time}}</div>
      <div class="date">{{date}} {{week}}</div>
    </div>
  </div>
</template>

<script>
  // const Bmob = require('../util/bmob')
  const weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  export default {
    name: "404",
    data () {
      return {
        time: '',
        date: '',
        week: '',
        interval: null
      }
    },
    created () {
      this.interval = setInterval(this.getNowTime, 1000)
      this.getNowTime()
    },
    methods: {
      async getNowTime () {
        // console.log(await Bmob.timestamp())
        const nowTime = new Date()
        let year = this.zeroPadding(nowTime.getFullYear(), 4)
        let month = this.zeroPadding(nowTime.getMonth(), 2)
        let day = this.zeroPadding(nowTime.getDate(), 2)
        let hours = this.zeroPadding(nowTime.getHours(), 2)
        let minutes = this.zeroPadding(nowTime.getMinutes(), 2)
        let seconds = this.zeroPadding(nowTime.getSeconds(), 2)
        this.time = `${hours}:${minutes}:${seconds}`
        this.date = `${year}-${month}-${day}`
        this.week = weeks[nowTime.getDay()]
      },
      zeroPadding (num, digit) {
        let str = `${10 ** digit}${num}`
        return str.slice(-digit)
      }
    },
    beforeDestroy () {
      if (this.interval) clearInterval(this.interval)
    }
  }
</script>

<style scoped lang="scss">
  .not-found-page-box {
    height: 100%;
    width: 100%;
    background: radial-gradient(ellipse at center, #0a2e38 0%, #000000 70%);

    .content {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #daf6ff;
      text-align: center;
      text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0);
      font-family: 'Share Tech Mono', monospace;

      .msg {
        letter-spacing: 0.1em;
        font-size: 15px;
      }

      .time {
        letter-spacing: 0.05em;
        font-size: 60px;
        margin-top: 5px;
      }

      .date {
        letter-spacing: 0.1em;
        font-size: 12px;
        margin-top: 20px;
      }
    }
  }
</style>
