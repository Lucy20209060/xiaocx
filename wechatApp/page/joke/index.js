Page({
    data: {
        message: '你好！vichily!点击加载数据',
        list:[]
        
    },
    getjoke: function(){
        var that = this
        wx.request({
          url: 'https://bird.ioliu.cn/joke/rand',
          data: {},
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          // header: {}, // 设置请求的 header
          success: function(res){
            console.log(res.data.data)
            that.setData({
                list: res.data.data
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
