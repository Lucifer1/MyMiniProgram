let Storage = require('../utils/storage-utils');
// const host = 'https://www.lightforpsy.top'
const host = 'http://localhost:3000'

function getCartList(obj) {
  wx.request({
    url: `${host}/lightman/api/cart?openid=${Storage.getVariable('openid') || ''}`,
    method: 'GET',
    header: {
      'content-type': 'application/json'
    },
    success: function (res) {
      console.log('ressssss', res);
      if (res.statusCode === 200) {
        typeof obj.success === 'function' && obj.success(res.data);
      }
    },
    fail: function (e) {
      console.log("login fail", e);
    },
    complete: function (e) {
    }
  });
}

function addToCart (obj) {
  console.log('addToCart22222', Storage.getVariable('openid'), obj);
  wx.request({
    url: `${host}/lightman/api/cart/addToCart`,
    method: 'POST',
    data: {
      openid: Storage.getVariable('openid'),
      product: obj.product
    },
    header: {
      'content-type': 'application/json'
    },
    success: function (res) {
      if (res.statusCode === 200) {
        typeof obj.success === 'function' && obj.success(res.data.user);
      }
    },
    fail: function (e) {
      console.log("login fail", e);
      typeof obj.fail === 'function' && obj.fail(e);
    },
    complete: function (e) {
      typeof obj.complete === 'function' && obj.complete(e);
    }
  });
}

module.exports = {
  getCartList,
  addToCart
}
