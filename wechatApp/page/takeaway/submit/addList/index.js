var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

    AddressInfo:{},
    activeId:''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.selectAddressInfo()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },


//选择地址

  address:function(e){

    this.setData({
      activeId: e.currentTarget.dataset.id
    })

    wx.setStorage({
      key: 'activeId',
      data: e.currentTarget.dataset.id,
      success:function(){
        wx.navigateBack({
          delta: 1
        })
      }
    })

    

    // wx.redirectTo({
    //   url: '/page/takeaway/submit/index?id=' + e.currentTarget.dataset.id
    // })

  },

  //获取地址列表
  selectAddressInfo: function () {


    var that = this;

    app.commonAjax('cat/address/selectAddressInfo', ['bizId', 'memberId'], {}, function (res) {


      console.log(res)


      that.setData({
        AddressInfo:res.data.data
      })


    }, app)


  },

  //删除地址
  delAddress: function (e) {

var that = this;
    var subdata = {}

    subdata.id = e.currentTarget.dataset.id


    app.commonAjax('cat/address/delAddress', ['bizId', 'memberId'], subdata, function (res) {

      that.selectAddressInfo()

      // if(res.code == 0){
      //   wx.navigateBack({
      //     delta: 1
      //   })
      // }

    }, app)
  },




  //新增地址
  pageto: function () {

    wx.redirectTo({
      url: '/page/takeaway/submit/addAdd/index'
    })

  }

})