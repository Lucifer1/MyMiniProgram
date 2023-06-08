let Storage = require('../../utils/storage-utils');

Page({
  data: {
    racket1: '',
    racket2: '',
    queryStr: '',
    searchflag: false,
    activeIndex: 0,
    totalList: [],
    searchList: [],
    isShowSearchList: false,
    whichInput: 1,
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
  onReady() {

  },
  onShow() {

  },
  query() {
    console.log('query');
    if (!this.data.racket1 || !this.data.racket2) {
      wx.showToast({
        title: '请输入要对比的球拍',
        icon: 'none',
        duration: 2000
      })
    } else {
      wx.navigateTo({
        url: `/pages/racket-compare-result/racket-compare-result?racket1=${this.data.racket1}&racket2=${this.data.racket2}`,
      })
    }
  },
  chooseRacketInputFocus(event) {
    const data = event.currentTarget.dataset
    this.setData({
      isShowSearchList: true,
      whichInput: data.type
    })
  },
  queryInput(e) {
    console.log('search', e);
    if (e.detail.value) {
      const searchList = this.data.totalList.filter(item => {
        return item.indexOf(e.detail.value) !== -1
      })
      console.log('searchList', searchList);
      if (searchList.length) {
        this.setData({
          searchList
        })
      } else {
        this.setData({
          searchList: ['暂无数据']
        })
      }
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
    this.setData({
      searchstr: '',
      searchflag: false,
      isShowSearchList: false,
      searchList: []
    })
  },
  searchList(e) {
    console.log('input', e);
  },
  confirm(e) {
    console.log('confirm', e);
  },
  chooseRacket(event) {
    console.log('testtt', this.data.whichInput === '1');
    const data = event.currentTarget.dataset
    console.log(data);
    if (this.data.whichInput === '1') {
      this.setData({
        racket1: data.racket
      })
    } else {
      this.setData({
        racket2: data.racket
      })
    }
    this.clear()
  }
})