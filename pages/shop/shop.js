Component({
  data: {
    queryStr: '',
    searchflag: false,
    productList: [
      { name: '天斧99', price: '100', img: '/images/icon.jpg', sellNum: '1234' },
      { name: '纳米7', price: '100', img: '/images/icon.jpg', sellNum: '1234' },
      { name: '白弓10', price: '100', img: '/images/icon.jpg', sellNum: '1234' },
      { name: '弓箭11', price: '100', img: '/images/icon.jpg', sellNum: '1234' },
      { name: '尖峰80', price: '100', img: '/images/icon.jpg', sellNum: '1234' },
      { name: '一个名字很长很长很长很长很长的拍子', price: '100', img: '/images/icon.jpg', sellNum: '1234' },
      { name: '一个名字很长很长很长很长很长的拍子', price: '100', img: '/images/icon.jpg', sellNum: '1234' },
      { name: '一个名字很长很长很长很长很长的拍子', price: '100', img: '/images/icon.jpg', sellNum: '1234' },
      { name: '一个名字很长很长很长很长很长的拍子', price: '100', img: '/images/icon.jpg', sellNum: '1234' }
    ],
    activeIndex: 0,
    searchList: [],
    isShowSearchList: false,
  },
  lifetimes: {
    created () {
    }
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' && this.getTabBar()) {
        this.getTabBar().setSelected('商城')
      }
    }
  },
  methods: {
    jumpToDetail () {
      wx.navigateTo({
        url: '/pages/product-detail/product-detail',
      })
    },
    turnToSearch () {
      this.setData({
        isShowSearchList: true
      })
    },
    queryInput (e) {
      console.log('search', e);
      if (e.detail.value) {
        const searchList = this.data.productList.filter(item => {
          return item.name.indexOf(e.detail.value) !== -1
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
  }
})