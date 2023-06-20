const computedBehavior = require("miniprogram-computed").behavior;
const CartApi = require('../../api/cart');

Component({
  behaviors: [computedBehavior],
  data: {
    productList: [],
    isAllCheck: false
  },
  computed: {
    totalPrice (data) {
      let totalPrice = 0
      for (let i = 0; i < data.productList.length; i++) {
        if (data.productList[i].checked) {
          console.log(data.productList[i]);
          totalPrice += data.productList[i].variant.price * data.productList[i].quantity
        }
      }
      return totalPrice
    }
  },
  lifetimes: {
    created () {
      CartApi.getCartList({
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
        this.getTabBar().setSelected('购物车')
      }
      CartApi.getCartList({
        success: (res) => {
          console.log('success', res);
          this.setData({
            productList: res
          })
        }
      })
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
