Component({
  data: {
    list: [
      {
        name: '绿厂',
        label: 'yonex'
      },
      {
        name: '红厂',
        label: 'lining'
      },
      {
        name: '蓝厂',
        label: 'victor'
      },
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
    jumpToQuery (e) {
      const data = e.currentTarget.dataset
      console.log('data', data);
      wx.navigateTo({
        url: `/pages/query/query?label=${data.item.label}`,
      })
    }
  }
})
