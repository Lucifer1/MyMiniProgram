Component({
  data: {
    queryStr: '',
    searchflag: false,
    productList: [
      { name: 'test1', desc: '123123123', price: '100', img: '/images/icon.jpg' },
      { name: 'test2', desc: '123123123', price: '100', img: '/images/icon.jpg' },
      { name: 'test3', desc: '123123123', price: '100', img: '/images/icon.jpg' },
      { name: 'test4', desc: '123123123', price: '100', img: '/images/icon.jpg' },
      { name: 'test5', desc: '123123123', price: '100', img: '/images/icon.jpg' },
      { name: 'test6', desc: '123123123', price: '100', img: '/images/icon.jpg' },
    ],
    activeIndex: 0,
    searchList: [],
    isShowSearchList: true,
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