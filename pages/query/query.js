let Storage = require('../../utils/storage-utils');

Page({
  data: {
    searchstr: '',
    searchflag: false,
    productList: {
      Yonex: {
        type: '绿厂',
        list: []
      },
      Victor: {
        type: '蓝厂',
        list: []
      },
      Lining: {
        type: '红厂',
        list: []
      }
    },
    activeIndex: 'Yonex',
    totalList: [],
    searchList: [],
    isShowSearchList: false
  },
  onLoad () {
    const racketData = JSON.parse(Storage.getVariable('racketData')) || []
    const productList = this.data.productList
    racketData.forEach((racket) => {
        productList[racket.mark].list.push(racket)
    })
    console.log('productList', productList);
    this.setData({
      productList: productList
    })
  },
  jumpToSearch () {
    console.log('jumpToSearch');
    wx.navigateTo({
      url: '/pages/search-list/search-list?from=query',
    })
  },
  changeProduct (e) {
    const data = e.currentTarget.dataset
    this.setData({
      activeIndex: data.index
    })
    console.log(data);
  },
  queryRacket(e) {
    const data = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/racket-compare-result/racket-compare-result?racket1=${data.racketName}`,
    })
  }
})