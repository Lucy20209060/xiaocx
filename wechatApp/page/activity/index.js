Page({
  data: {
    imgUrls: [
      'http://lingju360.natapp4.cc/zheng-wechat-mp-web/resources/images/activity/index-banner.png',
      'http://lingju360.natapp4.cc/zheng-wechat-mp-web/resources/images/activity/index-banner.png'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '首页'
    })
  }
})