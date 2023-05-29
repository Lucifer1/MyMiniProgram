// pages/racket-compare/racket-compare.js
Page({
  data: {
    racket1: '',
    racket2: '',
    params: ['球拍型号',	'重量参数',	'版本',	'重量', '平衡点', '挥重', '中杆硬度',	'中杆直径',	 '手柄长度',	'中杆长度'],
    racketData: [
      {
        name: '天斧99',
        variant: '3u5',
        version: 'sp',
        weight: '93.6',
        balancePoint: '310',
        swingWeight: '94.0',
        shaftStiffness: '偏硬',
        diameter: '7.0',
        handleLength: '200',
        shaftLength: '220',
        desc: '天斧99天斧99天斧99天斧99天斧99天斧99天斧99天斧99天斧99天斧99天斧99天斧99天斧99天斧99天斧99天斧99天斧99天斧99天斧99天斧99天斧99天斧99天斧99天斧99天斧99天斧99天斧99天斧99天斧99天斧99'
      },
      {
        name: '天斧88',
        variant: '3u5',
        version: 'sp',
        weight: '93.6',
        balancePoint: '310',
        swingWeight: '94.0',
        shaftStiffness: '偏硬',
        diameter: '7.0',
        handleLength: '200',
        shaftLength: '220',
        desc: '天斧88天斧88天斧88天斧88天斧88天斧88天斧88天斧88天斧88天斧88天斧88天斧88天斧88天斧88天斧88天斧88天斧88天斧88天斧88天斧88天斧88天斧88天斧88天斧88天斧88天斧88天斧88天斧88天斧88天斧88天斧88'
      }
    ]
  },
  onLoad(options) {
    const { racket1, racket2 } = options
    console.log('racket1, racket2', racket1, racket2);
    this.setData({
      racket1,
      racket2
    }) 
  }
})