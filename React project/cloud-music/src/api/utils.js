//计算播放数
export const getCount = (count) => {
    if (count < 0) return;
    if (count < 10000) {
      return count;
    } else if (Math.floor (count / 10000) < 10000) {
      return Math.floor (count/1000)/10 + "万";
    } else  {
      return Math.floor (count / 10000000)/ 10 + "亿";
    }
  }

//转换歌曲时长时间戳
export const changetime = (dt) => {
  let mytime = new Date(dt);
  let result = mytime.getMinutes() + ':' + mytime.getSeconds();
  return result;
}