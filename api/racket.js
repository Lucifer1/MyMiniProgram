let Storage = require('../utils/storage-utils');
const host = 'https://www.lightforpsy.top'

function getAllRacket() {
  wx.request({
    url: `${host}/lightman/api/query-racket`,
    method: 'get',
    header: {
      'content-type': 'application/json'
    },
    success: function (res) {
      console.log('getAllRacket res', res);
      if (res.statusCode === 200) {
        Storage.saveVariable('racketData', JSON.stringify(res.data));
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
  getAllRacket
}