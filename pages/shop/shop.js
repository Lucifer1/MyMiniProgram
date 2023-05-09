Component({
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' && this.getTabBar()) {
        this.getTabBar().setSelected('商城')
      }
    }
  }
})
