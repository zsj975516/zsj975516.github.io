const tabelName = 'photo_album'
const Bmob = require('./bmob')

export async function getAllPhotoAlbum () {
  return (await Bmob.find(tabelName)).map(item => item)
}
