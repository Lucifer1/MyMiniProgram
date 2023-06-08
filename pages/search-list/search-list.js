let Storage = require('../../utils/storage-utils');

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
    isShowSearchList: false
  },
  onLoad() {
    const racketData = JSON.parse(Storage.getVariable('racketData')) || []
    const totalList = []
    for (let i = 0; i < racketData.length; i++) {
      const name = racketData[i].name + ' ' + racketData[i].version + ' ' + racketData[i].variant
      totalList.push(name)
    }
    this.setData({
      totalList
    })
  },
  search(e) {
    console.log('search', e);
    if (e.detail.value) {
      const searchList = this.data.totalList.filter(item => {
        return item.indexOf(e.detail.value) !== -1
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
  queryRacket(e) {
    const data = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/racket-compare-result/racket-compare-result?racket1=${data.racketName}`,
    })
  }
})