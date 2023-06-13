let Storage = require('../utils/storage-utils');
const host = 'https://www.lightforpsy.top'

function getAllProduct(obj) {
  wx.request({
    url: `${host}/lightman/api/product`,
    method: 'get',
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

function getProductById(obj) {
  wx.request({
    url: `${host}/lightman/api/product/${obj.id}`,
    method: 'get',
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

module.exports = {
  getAllProduct,
  getProductById
}