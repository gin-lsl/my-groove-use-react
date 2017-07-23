import { musicUrl } from './services'

/**
 * 转换时间到 0:00 的表示形式
 * @param {number} numberTime 
 */
const convertToTime = (numberTime) => {
  let _second = numberTime % 60
  return Math.floor(numberTime / 60) + ':' + (_second > 9 ? _second : '0' + _second)
}

/**
 * 通过音乐的id获取音乐路径
 *
 * @param {number|string} id 音乐id
 */
const convertToMusicUrl = (id) => {
  return `${musicUrl}${id}.mp3`
}

export {
  convertToTime,
  convertToMusicUrl
}