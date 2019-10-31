<template>
  <div class="login-box">
    <div class="login-content-box" :class="{'is-login':isLogin}">
      <div class="form-container sign-up-container">
        <div class="title">注册</div>
        <input type="text" v-model="username" placeholder="用户名">
        <input type="email" v-model="email" placeholder="邮箱">
        <input type="password" v-model="password" placeholder="密码">
        <div class="btn" @click="register">注册</div>
      </div>
      <div class="form-container sign-in-container">
        <div class="title">登录</div>
        <input type="text" v-model="username" placeholder="用户名">
        <input type="password" v-model="password" placeholder="密码">
        <div class="forget-password">忘记密码？</div>
        <div class="btn" @click="login">登录</div>
      </div>
      <div class="change-box">
        <div class="change-panel">
          <div class="item-box left-box">
            <div class="title">欢迎回来！</div>
            <p>请您先登录的个人信息，进行操作。</p>
            <div class="btn" @click="isLogin=true">登录</div>
          </div>
          <div class="item-box right-box">
            <div class="title">你好朋友！</div>
            <p>输入您的个人信息注册成为会员。</p>
            <div class="btn" @click="isLogin=false">注册</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const Bmob = require('../util/bmob')

  export default {
    data () {
      return {
        isLogin: true,
        username: 'a',
        email: 'a',
        phone: 'a',
        password: 'a'
      }
    },
    watch: {
      isLogin (newVal) {
        this.email = ''
        this.phone = ''
        this.password = ''
        if (newVal) {
          document.title = '登录'
        } else {
          document.title = '注册'
        }
      }
    },
    async mounted () {
      console.log(await Bmob.current())
    },
    methods: {
      async register () {
        if (!this.username) return
        if (!this.email) return
        if (!this.password) return
        try {
          await Bmob.register({
            username: this.username,
            password: this.password,
            email: this.email,
            phone: this.phone,
          })
          this.isLogin = true
        } catch (e) {
          console.log(e)
          alert(e.error)
        }
      },
      async login () {
        if (!this.username) return
        if (!this.password) return
        try {
          let res = await Bmob.login(this.username, this.password)
          console.log(res)
        } catch (e) {
          console.log(e)
          this.$notify({
            title: '标题名称',
            // message: '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案'
            message: e.error
          })
          // alert(e.error)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .login-box {
    height: 100%;
    width: 100%;
    background-color: #f6f5f7;

    * {
      box-sizing: border-box;
    }

    .login-content-box {
      position: fixed;
      width: 768px;
      height: 480px;
      border-radius: 10px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      overflow: hidden;
      background-color: white;
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

      .form-container {
        position: absolute;
        top: 0;
        height: 100%;
        transition: all 0.6s ease-in-out;
        background-color: white;
        padding: 0 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .title {
          font-size: 32px;
          text-align: center;
        }

        input {
          height: 40px;
          padding: 0 15px;
          display: block;
          width: 100%;
          margin: 8px 0;
          border-radius: 5px;
          border: 1px solid #ccc;
          outline: none;

          &:focus {
            border-color: #FF4B2B;
          }
        }

        .forget-password {
          line-height: 40px;
        }

        .btn {
          border-radius: 20px;
          border: 1px solid #FF4B2B;
          background-color: #FF4B2B;
          color: #FFFFFF;
          font-size: 12px;
          font-weight: bold;
          padding: 12px 45px;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: transform 80ms ease-in;
          cursor: default;

          &:active {
            transform: scale(0.95);
          }
        }

        &.sign-up-container {
          left: 0;
          width: 50%;

          transform: translateX(100%);
          opacity: 1;
          z-index: 5;
        }

        &.sign-in-container {
          left: 0;
          width: 50%;
          z-index: 2;
          transform: translateX(100%);
        }
      }

      .change-box {
        position: absolute;
        top: 0;
        left: 50%;
        width: 50%;
        height: 100%;
        overflow: hidden;
        transition: transform 0.6s ease-in-out;
        z-index: 100;
        transform: translateX(-100%);

        .change-panel {
          background: linear-gradient(to right, #FF4B2B, #FF416C);
          color: #FFFFFF;
          position: relative;
          left: -100%;
          height: 100%;
          width: 200%;
          transition: transform 0.6s ease-in-out;
          transform: translateX(50%);

          .item-box {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 0 40px;
            text-align: center;
            top: 0;
            height: 100%;
            width: 50%;
            transform: translateX(0);
            transition: transform 0.6s ease-in-out;

            .title {
              font-size: 32px;
            }

            .btn {
              border-radius: 20px;
              color: #FFFFFF;
              font-size: 12px;
              font-weight: bold;
              padding: 12px 45px;
              letter-spacing: 1px;
              text-transform: uppercase;
              transition: transform 80ms ease-in;
              border: 1px solid #fff;
              background-color: transparent;
              cursor: default;

              &:active {
                transform: scale(0.95);
              }
            }

            &.left-box {
              transform: translateX(0);
            }

            &.right-box {
              right: 0;
              transform: translateX(20%);
            }
          }
        }
      }

      &.is-login {
        .form-container {
          &.sign-up-container {
            transform: translateX(0);
            opacity: 0;
            z-index: 1;
          }

          &.sign-in-container {
            transform: translateX(0);
          }
        }

        .change-box {
          transform: translateX(0);

          .change-panel {
            transform: translateX(0);

            .item-box {
              &.left-box {
                transform: translateX(-20%);
              }

              &.right-box {
                transform: translateX(0);
              }
            }
          }
        }
      }
    }
  }

</style>
