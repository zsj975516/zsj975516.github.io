import Vue from 'vue'
import Component from './src/Component'

const ComponentConstructor = Vue.extend(Component)

let zIndex = 2000

function showMsg (arg) {
  zIndex++
  console.log(arg, zIndex)

  const instance = new ComponentConstructor({el: document.createElement('div')})

  document.body.appendChild(instance.$el)

  instance.title = arg.title
  instance.message = arg.message
  instance.zIndex = zIndex
  instance.top = '16px'
}

Component.install = $Vue => {
  $Vue.prototype.$notify = showMsg
}

export default Component
