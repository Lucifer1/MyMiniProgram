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
      { name: '商城', icon: '/images/icon.jpg', jump: '/pages/shop/shop' },
      { name: '敬请期待~', icon: '/images/icon.jpg', jump: '/pages/other/other' }
    ],
    articleList: [
      { title: '这是一个名字', url: 'https://mp.weixin.qq.com/s/UebcCl_7ac0QLeRFm1WHtw' },
      { title: '这是一个名字很长的', url: 'https://mp.weixin.qq.com/s/UebcCl_7ac0QLeRFm1WHtw' },
      { title: '这是一个名字很长的文章这是一个', url: 'https://mp.weixin.qq.com/s/UebcCl_7ac0QLeRFm1WHtw' },
      { title: '这是一个名字很长的文章这是一个名字很长的文章这是一个名字很长的文章这是一个名字很长的文章', url: 'https://mp.weixin.qq.com/s/UebcCl_7ac0QLeRFm1WHtw' },
      { title: '这是一个名字很长的文章这是一个名字很长的文章这是一个名字很长的文章这是一个名字很长的文章', url: 'https://mp.weixin.qq.com/s/UebcCl_7ac0QLeRFm1WHtw' },
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
      if (data.jump === '/pages/other/other') return
      if (data.jump === '/pages/shop/shop') {
        wx.switchTab({url: '/pages/shop/shop'})
        return
      }
      wx.navigateTo({
        url: data.jump,
      })
    },
    jumpToArticle (event) {
      const data = event.currentTarget.dataset
      wx.navigateTo({
        url: `/pages/article/article?url=${data.url}`,
      })
    }
  }
})

