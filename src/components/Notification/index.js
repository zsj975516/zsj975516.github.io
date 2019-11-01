import Vue from 'vue'
import Component from './src/Component'

const ComponentConstructor = Vue.extend(Component)

let zIndex = 2000

const msgs = []

function showMsg (arg) {
  const instance = new ComponentConstructor({
    data: {
      ...arg,
      zIndex: ++zIndex
    }
  })

  instance.$mount();
  document.body.appendChild(instance.$el)


  const oldClose = instance.handleClose
  instance.handleClose = () => {
    oldClose()
    instance.$destroy()
    document.body.removeChild(instance.$el)
    let index = msgs.findIndex(item => instance === item)
    if (index > -1) msgs.splice(index, 1)

    msgs.map((item, index) => {
      let top = 16
      for (let i = 0; i < index; i++) {
        top += 16 + msgs[i].$el.offsetHeight
      }

      item.top = `${top}px`
    })
  }
  let top = 16
  if (msgs.length) {
    let el = msgs[msgs.length - 1].$el
    top += el.offsetHeight + el.offsetTop
  }
  instance.top = `${top}px`

  msgs.push(instance)
}

Component.install = $Vue => {
  $Vue.prototype.$notify = showMsg
}

export default Component
