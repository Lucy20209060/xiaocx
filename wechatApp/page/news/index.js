Page({
    data: {
        message: '你好！vichily!点击加载数据',
        list:[]
        
    },
    getnews: function(){
        var that = this
        var url = 'http://v.juhe.cn/toutiao/index?type=&key=fd3f7fc7f0aa529f06cfd38fb46c1f15';

        wx.request({
          url: 'https://bird.ioliu.cn/v1/?url=' + url,
          data: {},
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          // header: {}, // 设置请求的 header
          success: function(res){
            console.log(res.data.result.data)
            that.setData({
                list: res.data.result.data
            })
          },
          fail: function(res) {
            // fail
          },
          complete: function(res) {
            // complete
          }
        })
    }
});
