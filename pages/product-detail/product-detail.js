const ProductApi = require('../../api/product');
const CartApi = require('../../api/cart');
console.log('CartApi', CartApi);

Page({
  data: {
    product: {},
    isShowVariantModule: false,
    activeVariantIndex: 0,
    variantNumber: 1
  },
  onLoad(options) {
    const { productId } = options
    ProductApi.getProductById({
      id: productId,
      success: (res) => {
        console.log('success', res);
        this.setData({
          product: res
        })
      }
    })
  },
  showVariantModule () {
    this.setData({
      isShowVariantModule: true
    })
  },
  closeVariantModule () {
    this.setData({
      isShowVariantModule: false
    })
  },
  changeVariant (e) {
    const data = e.currentTarget.dataset
    this.setData({
      activeVariantIndex: data.index
    })
  },
  decline () {
    if (this.data.variantNumber <= 1) {
      return
    }
    const variantNumber = this.data.variantNumber - 1
    this.setData({
      variantNumber
    })
  },
  plus () {
    const variantNumber = this.data.variantNumber + 1
    this.setData({
      variantNumber
    })
  },
  jumpToComfirm () {
    wx.navigateTo({
      url: '/pages/comfirm/comfirm',
    })
  },
  addToCart () {
    console.log('addToCart111');
    CartApi.addToCart({
      product: {
        productId: this.data.product.productId,
        variantId: this.data.product.variants[this.data.activeVariantIndex].id,
        quantity: this.data.variantNumber
      },
      success: (res) => {
        console.log('success', res);
        this.setData({
          product: res
        })
      }
    })
  }
})