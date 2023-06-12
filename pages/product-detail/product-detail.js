Page({
  data: {
    imgList: [
      'https://www.lightforpsy.top/img/1.jpg',
      'https://www.lightforpsy.top/img/2.jpg',
      'https://www.lightforpsy.top/img/3.jpg',
      'https://www.lightforpsy.top/img/4.jpg',
      'https://www.lightforpsy.top/img/5.jpg'
    ],
    variantList: ['规格111111111111111', '规格222', '规格33333333333333'],
    isShowVariantModule: false,
    activeVariantIndex: 0,
    variantNumber: 2
  },
  onLoad(options) {

  },
  showVariantModule () {
    this.setData({
      isShowVariantModule: true
    })
  },
  closeVariantModule () {
    this.setData({
      isShowVariantModule: false
    })
  },
  changeVariant (e) {
    const data = e.currentTarget.dataset
    this.setData({
      activeVariantIndex: data.index
    })
  },
  decline () {
    if (this.data.variantNumber <= 1) {
      return
    }
    const variantNumber = this.data.variantNumber - 1
    this.setData({
      variantNumber
    })
  },
  plus () {
    const variantNumber = this.data.variantNumber + 1
    this.setData({
      variantNumber
    })
  },
  jumpToComfirm () {
    wx.navigateTo({
      url: '/pages/comfirm/comfirm',
    })
  }
})