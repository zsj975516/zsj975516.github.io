import Bmob from "hydrogen-js-sdk"

Bmob.initialize("0143c6ccf32c8c9f", "111111");

Bmob.debug(process.env.NODE_ENV !== 'production')

/**
 * 登陆
 * @param username
 * @param password
 * @returns {*|Promise|Promise<any>}
 */
export function login (username, password) {
  return Bmob.User.login(username, password)
}

/**
 * 注册
 * @param username
 * @param password
 * @param email
 * @param phone
 */
export function register ({username, password, email, phone}) {
  return Bmob.User.register({username, password, email, phone})
}

/**
 * 手机验证码登陆
 * @param phone
 * @param smsCode
 */
export function signOrLoginByMobilePhone (phone, smsCode) {
  return Bmob.User.signOrLoginByMobilePhone(phone, smsCode)
}

/**
 * 更新用户缓存
 * @param objectId
 * @returns {*|Promise|Promise<any>}
 */
export function updateStorage (objectId) {
  return Bmob.User.updateStorage(objectId)
}

/**
 * 退出登录
 */
export function logout () {
  return Bmob.User.logout()
}

/**
 * 查询用户
 */
export function users () {
  return Bmob.User.users()
}

/**
 * 获取用户登录信息
 * @returns {*|isForced.data|Promise|Promise<any>}
 */
export function current () {
  return Bmob.User.current()
}

/**
 * 验证 Email
 * @param email
 */
export function requestEmailVerify (email) {
  return Bmob.User.requestEmailVerify(email)
}

/**
 * Eamil密码重置
 * @param email
 * @returns {*}
 */
export function requestPasswordReset ({email}) {
  return Bmob.requestPasswordReset({email})
}

/**
 * 短信密码重置
 * @param smsCode
 * @param password
 * @returns {*}
 */
export function resetPasswordBySmsCode (smsCode, {password}) {
  return Bmob.resetPasswordBySmsCode(smsCode, {password})
}

/**
 * 提供旧密码方式安全修改用户密码
 * @param objectId
 * @param oldPassword
 * @param newPassword
 */
export function updateUserPassword (objectId, {oldPassword, newPassword}) {
  return Bmob.updateUserPassword(objectId, {oldPassword, newPassword})
}

/**
 * 使用推送接口可将消息推送至对应设备
 * @param data
 */
export function push ({data}) {
  return Bmob.push({data})
}

/**
 * 获取一行记录
 * @param tableName
 * @param objectId
 * @returns {*|Promise|Promise<any>}
 */
export function get (tableName, objectId) {
  const query = Bmob.Query(tableName);
  return query.get(objectId)
}

/**
 * 新增/修改一行记录
 * @param tableName
 * @param arg
 * @returns {*|Promise|Promise<any>}
 */
export function set (tableName, arg = {}) {
  const query = Bmob.Query(tableName);
  for (let key in arg) {
    query.set(key, arg[key])
  }
  return query.save()
}

/**
 * 删除字段的值
 * @param tableName
 * @param objectId
 * @param keys
 * @returns {Promise<void>}
 */
export async function unset (tableName, objectId, keys = []) {
  const query = Bmob.Query(tableName);
  let res = await query.get(objectId)
  keys.map(key => res.unset(key))
  res.save()
}

/**
 * 删除一行记录
 * @param tableName
 * @param objectId
 * @returns {Promise<void>}
 */
export function destroy (tableName, objectId) {
  const query = Bmob.Query(tableName);
  return query.destroy(objectId)
}

/**
 * 查询所有数据
 * @param tableName
 * @returns {Promise<*|Promise|Promise<any>>}
 */
export function find (tableName) {
  const query = Bmob.Query(tableName);
  return query.find()
}

/**
 * 原子计数器
 * @param tableName
 * @param objectId
 * @param fields
 * @param num
 * @returns {Promise<*|Promise|Promise<any>|void>}
 */
export async function increment (tableName, objectId, fields = [], num = 1) {
  const query = Bmob.Query(tableName);
  let res = await query.get(objectId)
  fields.map(field => res.increment(field, num))
  return res.save()
}

