<template>
  <div class="input-box-box" :class="{focus:isFocus}">
    <font-icon v-if="type==='password'"
               :href="`#icon-showpassword`"
               class="show-password"
               @mousedown="passwordShow=true"
               @mouseup="passwordShow=false"
               @mouseleave="passwordShow=false"></font-icon>
    <input v-if="passwordShow"
           type="text"
           v-model="inputValue"
           :placeholder="placeholder">
    <input v-else
           :type="type"
           v-model="inputValue"
           @focus="isFocus=true"
           @blur="isFocus=false"
           :placeholder="placeholder">
  </div>
</template>

<script>
  import FontIcon from '../../FontIcon'

  export default {
    name: "InputBox",
    components: {FontIcon},
    props: {
      placeholder: String,
      type: String,
      value: String
    },
    data () {
      return {
        isFocus: false,
        passwordShow: false
      }
    },
    computed: {
      inputValue: {
        get () {
          return this.value
        },
        set (value) {
          this.$emit('input', value)
        }
      }
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  .input-box-box {
    display: inline-block;
    width: 173px;
    height: 21px;
    box-sizing: border-box;
    overflow: hidden;
    border: 1px solid #ccc;
    position: relative;

    input {
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      border: none;
      outline: none;
    }

    .show-password {
      height: 20px;
      width: 20px;
      padding: 2px;
      box-sizing: border-box;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;

      & + input {
        width: calc(100% - 20px);
      }

      &:hover {
        color: #ff4b2b;
      }
    }

    &.focus {
      border-color: #FF4B2B;
    }
  }
</style>
