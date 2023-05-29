// pages/compare/compare.js
Page({
  data: {
    racket1: '',
    racket2: '',
    queryStr: '',
    searchflag: false,
    productList: [
      {
        type: '天斧系列',
        list: ['天斧77', '天斧88', '天斧99',]
      },
      {
        type: '纳米系列',
        list: ['纳米77', '纳米88', '纳米99',]
      },
      {
        type: '弓箭系列',
        list: ['弓箭77', '弓箭88', '弓箭99',]
      },
    ],
    activeIndex: 0,
    totalList: [],
    searchList: [],
    isShowSearchList: false,
    whichInput: 1,
  },
  onLoad(options) {
    const totalList = []
    for (let i = 0; i < this.data.productList.length; i++) {
      totalList.push(...this.data.productList[i].list)
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
        url: `/pages/racket-compare/racket-compare?racket1=${this.data.racket1}&racket2=${this.data.racket2}`,
      })
    }
  },
  chooseRacketInputFocus (event) {
    const data = event.currentTarget.dataset
    this.setData({
      isShowSearchList: true,
      whichInput: data.type
    })
  },
  queryInput (e) {
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
  queryFocus (e) {
    this.setData({
      searchflag: true,
      isShowSearchList: true
    })
    console.log('getfocus', e);
  },
  onBlur (e) {
    console.log('blur');
  },
  clear (e) {
    console.log('clear');
    this.setData({
      searchstr: '',
      searchflag: false,
      isShowSearchList: false,
      searchList: []
    })
  },
  searchList (e) {
    console.log('input', e);
  },
  confirm (e) {
    console.log('confirm', e);
  },
  chooseRacket (event) {
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