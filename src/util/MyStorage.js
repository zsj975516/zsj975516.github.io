import uuid from 'uuid/v4'

const events = {}

class MyStorage {
  static setItem (key, value) {
    let $value = {time: uuid().replace(/-/g, ''), value}
    return localStorage.setItem(key, JSON.stringify($value))
  }

  static getItem (key, def) {
    let v = JSON.parse(localStorage.getItem(key))
    return v ? v.value : def
  }

  static removeItem (key) {
    return localStorage.removeItem(key)
  }

  static clear () {
    return localStorage.clear()
  }

  static on (eventName, listener) {
    if (!events[eventName]) events[eventName] = []
    events[eventName].push(listener)
  }

  static emit (eventName, data) {
    MyStorage.setItem('communication', {action: eventName, data})
  }
}

window.addEventListener('storage', ev => {
  if (ev.key !== 'communication') return
  const communication = MyStorage.getItem('communication')
  if (events[communication.action]) {
    events[communication.action].map(listener => {
      listener(communication.data)
    })
  }
})

window.myStorage = MyStorage
