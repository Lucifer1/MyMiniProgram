// pages/article/article.js
Page({
  data: {
    url: ''
  },
  onLoad(options) {
    const { url } = options
    this.setData({
      url
    })
  }
})