let Storage = require('../utils/storage-utils');

function createUser(obj) {
  wx.login({
    success: function (res) {
      if (res.code) {
        let code = res.code;
        wx.request({
          url: `${Config.host}/lightman/api/user/user-info/createUser`,
          method: 'POST',
          data: {
            code
          },
          header: {
            'content-type': 'application/json'
          },
          success: function (res) {
            if (res.statusCode === 200) {
              Storage.saveVariable('openId', `${res.data.openId}`);
              typeof obj.success === 'function' && obj.success(res);
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

module.exportes = {

}