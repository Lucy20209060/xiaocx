//index.js
//获取应用实例

import { API_HOME } from '../../utils/api'

var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    site:[]
  },
  //事件处理函数
  bindViewTap: function() {
    // console.log('跳转到logs页面')
    // 跳转
    wx.navigateTo({
      url: '../news/news'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      console.log(userInfo)
      that.setData({
        userInfo:userInfo
      })
    })
  },
  // 页面滚动
  onPageScroll:function(){
    // console.log(1111)
    // this.setData({
    //   motto: 'luchao'
    // })
  },
  tapTest:function(){
    this.setData({
      motto:'lucy'
    });

    const that = this;
    const getlist = wx.request({
      url: API_HOME.getlist,
      data: {},
      success: function (res) {

        that.setData({
          site:res.data.data
        })

        console.log(that.data.site)

      }
    })
    // 取消请求任务
    // getlist.abort();
  }
})



