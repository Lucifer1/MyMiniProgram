const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Component({
  data: {
    avatarUrl: defaultAvatarUrl,
    nickname: ''
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' && this.getTabBar()) {
        this.getTabBar().setSelected('我的')
      }
    }
  },
  methods: {
    onChooseAvatar (e) {
      const { avatarUrl } = e.detail
      console.log('avatarUrl', avatarUrl);
      this.setData({
        avatarUrl,
      })
    },
    nicknameConfirm (e) {
      const nickname = e.detail.value
      if(this.strlen(nickname) >= 10) {
        console.log('>>>', 'nickname.slice(0, 10', nickname.slice(0, 10) + '...')
        this.setData({
          nickname: nickname.slice(0, 10) + '...'
        })
      }
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
  }
  }
})
