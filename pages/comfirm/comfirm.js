Page({
  data: {
    // addressInfo: {
    //   nickName: '张家铭',
    //   phone: '13832991276',
    //   address: '北京市 朝阳区 望京街道 剩下的你猜'
    // },
    addressInfo: {
    }
  },
  onLoad(options) {

  },
  jumpToAddress () {
    wx.navigateTo({
      url: '/pages/address-list/address-list',
    })
  }
})