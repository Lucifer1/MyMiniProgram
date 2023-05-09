// pages/query/query.js
Page({
  data: {
    searchstr: '',
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
    isShowSearchList: false
  },
  onLoad (options) {
    console.log('options', options);
    const totalList = []
    for (let i = 0; i < this.data.productList.length; i++) {
      totalList.push(...this.data.productList[i].list)
    }
    this.setData({
      totalList
    })
  },
  search (e) {
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
  onFocus (e) {
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
  changeProduct (e) {
    const data = e.currentTarget.dataset
    this.setData({
      activeIndex: data.index
    })
    console.log(data);
  }
})