Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [
      {
        pagePath: "/pages/index/index",
        text: "查询"
      },
      {
        pagePath: "/pages/shop/shop",
        text: "商城"
      },
      {
        pagePath: "/pages/buy-list/buy-list",
        text: "购物车"
      },
      {
        pagePath: "/pages/me-page/me-page",
        text: "我的"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
    },
    setSelected (itemName) {
      switch(itemName) {
        case '查詢':
          this.setData({
            selected: 0
          })
          break
        case '商城':
          this.setData({
            selected: 1
          })
          break
        case '购物车':
          this.setData({
            selected: 2
          })
          break
        case '我的':
          this.setData({
            selected: 3
          })
          break
        default: 
          this.setData({
            selected: 0
          })
      }
    }
  }
})