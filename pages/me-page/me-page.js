const userApi = require('../../api/user')
const galleryUrl = 'https://www.lightforpsy.top/img/uploadImg/'
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Component({
  data: {
    avatarUrl: defaultAvatarUrl,
    nickName: ''
  },
  lifetimes: {
    created () {
      userApi.getUserByOpenId({
        success: (res) => {
          this.setData({
            nickName: res.nickName,
            avatarUrl: res.avatarImg,
          })
        }
      })
    }
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' && this.getTabBar()) {
        this.getTabBar().setSelected('我的')
      }
    }
  },
  methods: {
    async onChooseAvatar (e) {
      const { avatarUrl } = e.detail
      console.log('avatarUrl', avatarUrl);
      userApi.uploadFile({
        avatarUrl,
        success: (res) => {
          console.log('galleryUrl + res.fileUrl,', galleryUrl + res.fileUrl,);
          userApi.updateAvatar({
            avatarImg: galleryUrl + res.fileUrl,
            success: (res) => {
              console.log('res', res);
              this.setData({
                avatarUrl: res.avatarImg
              })
            }
          })
        }
      })     
    },
    nicknameConfirm (e) {
      const nickName = e.detail.value
      userApi.updateNickname({
        nickName,
        success: (res) => {
          if(this.strlen(res.nickName) >= 10) {
            this.setData({
              nickName: res.nickName.slice(0, 10) + '...'
            })
          } else {
            this.setData({
              nickName: res.nickName,
            })
          }
        }
      })
    },
    strlen (str) {
      let len = 0
      for (let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i)
        //单字节加1
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {
          len++
        } else {
          len += 2
        }
      }
      return len;
    },
    jumpToAddress () {
      wx.navigateTo({
        url: '/pages/address-list/address-list',
      })
    }
  }
})
