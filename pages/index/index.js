Component({
  data: {
    imgList: [
      'https://lightman-bucket.s3.ap-northeast-1.amazonaws.com/1.jpg',
      'https://lightman-bucket.s3.ap-northeast-1.amazonaws.com/2.jpg',
      'https://lightman-bucket.s3.ap-northeast-1.amazonaws.com/3.jpg',
    ],
    moduleList: [
      { name: '球拍查询', icon: '/images/icon.jpg', jump: '/pages/query/query?type=racket' },
      { name: '球拍对比', icon: '/images/icon.jpg', jump: '/pages/compare/compare' },
      { name: '装备查询', icon: '/images/icon.jpg', jump: '/pages/query/query?type=equipment' },
      { name: '商城', icon: '/images/icon.jpg', jump: '/pages/shop/shop' }
    ]
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' && this.getTabBar()) {
        this.getTabBar().setSelected('查詢')
      }
    }
  },
  methods: {
    jumpToModule (event) {
      console.log('event', event);
      const data = event.currentTarget.dataset
      wx.navigateTo({
        url: data.jump,
      })
    }
  }
})

