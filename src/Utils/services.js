/**
 * 请求服务器 host
 */
const uriPrefix = process.env.host || 'http://192.168.170.1:8001'

/**
 * 获取 musics
 */
const fetchMusics = uriPrefix + '/musics.json'

/**
 * 音乐存放路径
 */
const musicUrl = uriPrefix + '/musics/'

/**
 * 专辑封面存放路径
 */
const albumCoverUrl = uriPrefix + '/album_covers/'

export {
  uriPrefix,
  fetchMusics,
  musicUrl,
  albumCoverUrl
}