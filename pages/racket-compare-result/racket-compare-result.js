let Storage = require('../../utils/storage-utils');

Page({
  data: {
    racketData1: null,
    racketData2: null,
    params: ['球拍型号',	'重量参数',	'版本',	'重量', '平衡点', '挥重', '中杆硬度',	'中杆直径',	 '手柄长度',	'中杆长度']
  },
  onLoad(options) {
    const racketData = JSON.parse(Storage.getVariable('racketData')) || []
    const { racket1, racket2 } = options
    const racketData1 = racketData.filter(item => {
      const name = item.name + ' ' + item.version + ' ' + item.variant
      return name.indexOf(racket1) !== -1
    })
    const racketData2 = racketData.filter(item => {
      const name = item.name + ' ' + item.version + ' ' + item.variant
      return name.indexOf(racket2) !== -1
    })
    this.setData({
      racketData1: racketData1[0],
      racketData2: racketData2[0]
    }) 
  }
})