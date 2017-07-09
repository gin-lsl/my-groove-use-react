/**
 * 转换时间到 0:00 的表示形式
 * @param {number} numberTime 
 */
const convertToTime = (numberTime) => {
  let _second = numberTime % 60
  return Math.floor(numberTime / 60) + ':' + (_second > 9 ? _second : '0' + _second)
}

export {
  convertToTime,
}