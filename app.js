const UserApi = require('./api/user');
const RacketApi = require('./api/racket');
console.log('RacketApi', RacketApi);

// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // // 登录
    // UserApi.miniLogin({
    //   success: function (res) {
    //     console.log('>>>', 'res', res)
    //     if (res.statusCode === 200) {
    //     }
    //   }
    // })

    // 获取拍子数据
    RacketApi.getAllRacket()
  },
  globalData: {
    userInfo: null
  }
})
