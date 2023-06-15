const ProductApi = require('../../api/product');

Component({
  data: {
    queryStr: '',
    searchflag: false,
    productList: [],
    activeIndex: 0,
    searchList: [],
    isShowSearchList: false,
  },
  lifetimes: {
    created () {
      ProductApi.getAllProduct({
        success: (res) => {
          console.log('success', res);
          this.setData({
            productList: res
          })
        }
      })
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
    jumpToDetail (e) {
      const data = e.currentTarget.dataset
      const product = data.item
      wx.navigateTo({
        url: `/pages/product-detail/product-detail?productId=${product.productId}`,
      })
    },
    jumpToSearch () {
      wx.navigateTo({
        url: '/pages/search-list/search-list?from=shop',
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
      // this.setData({
      //   searchflag: false,
      //   isShowSearchList: false
      // })
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