const UserApi = require('/api/user');

// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    UserApi.miniLogin({
      success: function (res) {
        console.log('>>>', 'res', res)
        if (res.statusCode === 200) {
        }
      }
  })
  },
  globalData: {
    userInfo: null
  }
})
