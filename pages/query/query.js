// 把搜索页改成一个paeg吧
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
  },
  jumpToSearch () {
    console.log('jumpToSearch');
    wx.navigateTo({
      url: '/pages/search-list/search-list',
    })
  },
  changeProduct (e) {
    const data = e.currentTarget.dataset
    this.setData({
      activeIndex: data.index
    })
    console.log(data);
  }
})