
// 定义常量
const appid = 'wxd3a3d4ee9ea470d4';
const secret = '6a797e94a40bbb286594c461f621ae62';
const jscode2session = 'https://api.weixin.qq.com/sns/jscode2session';
const baseUrl = 'https://aa.zdcom.net.cn/';
// const unionIdUrl = baseUrl + 'wechatProgram/user/unionId/unionIdApi.php';
const coreUrl = baseUrl +"gaoshou/core/";
const img = baseUrl +"gaoshou/images/";


// 对外接口
module.exports = {
  appid: appid,
  secret: secret,
  jscode2session: jscode2session,
  // unionIdUrl: unionIdUrl,
  coreUrl:coreUrl,
  img: img,


}