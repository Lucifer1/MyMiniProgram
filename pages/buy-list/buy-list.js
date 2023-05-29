const computedBehavior = require("miniprogram-computed").behavior;

Component({
  behaviors: [computedBehavior],
  data: {
    productList: [
      { name: '天斧77 1', variant: '3ug5', number: 1, price: 10, checked: false },
      { name: '天斧77 2', variant: '3ug5', number: 2, price: 10, checked: false },
      { name: '天斧77 3', variant: '3ug5', number: 3, price: 10, checked: false },
      { name: '天斧77 4', variant: '3ug5', number: 4, price: 10, checked: false },
      { name: '天斧77 5', variant: '3ug5', number: 5, price: 10, checked: false },
      { name: '天斧77 6', variant: '3ug5', number: 6, price: 10, checked: false },
    ],
    isAllCheck: false
  },
  computed: {
    totalPrice (data) {
      let totalPrice = 0
      for (let i = 0; i < data.productList.length; i++) {
        if (data.productList[i].checked) {
          console.log(data.productList[i]);
          totalPrice += data.productList[i].price * data.productList[i].number
        }
      }
      return totalPrice
    }
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' && this.getTabBar()) {
        this.getTabBar().setSelected('购物车')
      }
    }
  },
  methods: {
    selectProduct: function (e) {
      const data = e.currentTarget.dataset
      const key = `productList[${data.index}].checked`
      
      this.setData({
        [key]: !this.data.productList[data.index].checked
      })
    },
    decline (event) {
      const data = event.currentTarget.dataset
      const product = this.data.productList[data.index]
      if (product.number <= 1) {
        return
      }
      const key = `productList[${data.index}].number`
      this.setData({
        [key]: product.number - 1
      })
    },
    plus (event) {
      const data = event.currentTarget.dataset
      const product = this.data.productList[data.index]
      const key = `productList[${data.index}].number`
      this.setData({
        [key]: product.number + 1
      })
    },
    checkAll () {
      if (!this.data.isAllCheck) {
        for (let i = 0; i < this.data.productList.length; i++) {
          const key = `productList[${i}].checked`
          this.setData({
            [key]: true
          })
        }
      } else {
        for (let i = 0; i < this.data.productList.length; i++) {
          const key = `productList[${i}].checked`
          this.setData({
            [key]: false
          })
        }
      }
      this.setData({
        isAllCheck: !this.data.isAllCheck
      })
    }
  }
})
