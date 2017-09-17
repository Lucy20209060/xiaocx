Page({
  data: {
    imgUrls: [
      'http://lingju360.natapp4.cc/zheng-wechat-mp-web/resources/images/index/banner1.png',
      'http://lingju360.natapp4.cc/zheng-wechat-mp-web/resources/images/index/banner2.png'
    ],
    m:0
  },
  onLoad:function(){
    wx.setNavigationBarTitle({
      title: '首页'
    });
    
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '666',
      path: '/page/main/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },

  hhhhhh:function(){
      this.setData({
        m:!this.data.m
      })
  },

  //排队判断
  getQueueInfo:function(){
    wx.request({
      url: 'https://lingju360.natapp4.cc/lingju-catering-miniapp/cat/waitinfo/getQueueInfo',
      data: { deskTypeId: 193, shopId: 6, memberId: 1 },
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      method: 'post',
      success: function (res) {
        console.log('--------------获取排队')
        console.log(res.data.data)
        if (res.data.data.myNumber == null){

          wx.navigateTo({
            url: '/page/lineUp/index'
          })

        }else{
          if (res.data.data.id != null) {
            wx.setStorage({
              key: "userId",
              data: res.data.data.id,
              success:function(){
                wx.navigateTo({
                  url: '/page/lineUp/lineUp2/index'
                })
              }
            })
          }   
        }

      }
    })
  }


})