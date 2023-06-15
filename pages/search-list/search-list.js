const Storage = require('../../utils/storage-utils');
const ProductApi = require('../../api/product');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    queryStr: '',
    searchflag: false,
    activeIndex: 0,
    totalList: [],
    searchList: [],
    isShowSearchList: false,
    from: ''
  },
  onLoad(options) {
    const { from } = options
    this.setData({
      from
    })
    let totalList = []
    if (from === 'shop') {
      ProductApi.getAllProduct({
        success: (res) => {
          console.log('success', res);
          totalList = [...res]
          for (let i = 0; i < totalList.length; i++) {
            totalList[i].showName = totalList[i].productName
          }
          this.setData({
            totalList
          })
        }
      })
    } else {
      const racketData = JSON.parse(Storage.getVariable('racketData')) || []
      totalList = [...racketData]
      for (let i = 0; i < totalList.length; i++) {
        totalList[i].showName = racketData[i].name + ' ' + racketData[i].version + ' ' + racketData[i].variant
      }
      this.setData({
        totalList
      })
    }
  },
  search(e) {
    console.log('search', e);
    if (e.detail.value) {
      const searchList = this.data.totalList.filter(item => {
        return item.showName.indexOf(e.detail.value) !== -1
      })
      console.log('searchList', searchList);
      this.setData({
        searchList
      })
    } else {
      this.setData({
        searchList: []
      })
    }
  },
  queryFocus(e) {
    this.setData({
      searchflag: true,
      isShowSearchList: true
    })
    console.log('getfocus', e);
  },
  onBlur(e) {
    console.log('blur');
  },
  clear(e) {
    console.log('clear');
    wx.navigateBack()
  },
  searchList(e) {
    console.log('input', e);
  },
  confirm(e) {
    console.log('confirm', e);
  },
  queryItem(e) {
    const data = e.currentTarget.dataset
    console.log(data);
    if (this.data.from === 'shop') {
      wx.navigateTo({
        url: `/pages/product-detail/product-detail?productId=${data.item.productId}`,
      })
    } else {
      wx.navigateTo({
        url: `/pages/racket-compare-result/racket-compare-result?racket1=${data.item.showName}`,
      })
    }  
  }
})