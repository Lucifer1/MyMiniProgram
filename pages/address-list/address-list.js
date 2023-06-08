// pages/addressList/addressList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      addressList:[
        {
          name: 'test',
          tel: '13812312312',
          address: '北京市 朝阳区 望京街道 你猜哪个房子',
        },
      ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  /**默认地址被修改 */
  radioChange(e){
    const index = e.detail.value
    console.log('index', index);
    const addressList = this.data.addressList
    addressList.forEach((address, index) => {
      address.status = false
    })
    addressList[index].status = true
    this.setData({
      addressList
    })
  },
  chooseAddress() {
    wx.chooseAddress({
      success: (res) => {
        console.log('res', res);
        const addressList = this.data.addressList
        const address = {
          name: res.userName,
          tel: res.telNumber,
          address: res.cityName + ' ' + res.countyName + ' ' + res.detailInfo,
          status: false
        }
        addressList.unshift(address)
        this.setData({
          addressList
        })
      },
      fail: function(err) {
        console.log(err)
      }
    })
  },
  delAddr(e) {
    console.log('del');
    const data = e.currentTarget.dataset
    const index = data.path
    const addressList = this.data.addressList
    addressList.splice(index, 1)
    this.setData({
      addressList
    })
  }
})
