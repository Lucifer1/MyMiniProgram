let Storage = require('../utils/storage-utils');
const host = 'https://www.lightforpsy.top'

function miniLogin(obj) {
  wx.login({
    success: function (res) {
      if (res.code) {
        let code = res.code;
        console.log('code', code);
        wx.request({
          url: `${host}/lightman/api/user-info/createUser`,
          method: 'POST',
          data: {
            code
          },
          header: {
            'content-type': 'application/json'
          },
          success: function (res) {
            if (res.statusCode === 200) {
              Storage.saveVariable('openid', `${res.data.user.openid}`);
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
    }
  });
}

function uploadFile (obj) {
  console.log(obj);
  wx.uploadFile({
    url: `${host}/lightman/api/upload`,
    filePath: obj.avatarUrl,
    name: 'file', 
    success: function (res) {
      typeof obj.success === 'function' && obj.success(JSON.parse(res.data));
    },
  }) 
}

function getUserByOpenId (obj) {
  wx.request({
    url: `${host}/lightman/api/user-info/getUserByOpenId?openid=${Storage.getVariable('openid')}`,
    method: 'GET',
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

function updateNickname (obj) {
  wx.request({
    url: `${host}/lightman/api/user-info/updateNickName`,
    method: 'POST',
    data: {
      openid: Storage.getVariable('openid'),
      nickName: obj.nickName
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

function updateAvatar (obj) {
  wx.request({
    url: `${host}/lightman/api/user-info/updateAvatar`,
    method: 'POST',
    data: {
      openid: Storage.getVariable('openid'),
      avatarImg: obj.avatarImg
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
  miniLogin,
  getUserByOpenId,
  uploadFile,
  updateNickname,
  updateAvatar
}