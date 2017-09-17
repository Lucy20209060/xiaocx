
Page({
  data: {
    storeNane:'',
    buymenu:{},
    price:0,
    shopId: '',
    bizId: '',
    memberId: 0
  },

  onShow:function(){
    var that = this;

    wx.getStorage({
      key: 'memberId',
      success: function (res) {
        console.log(res.data)
        that.setData({
          memberId: res.data
        })
        wx.getStorage({
          key: 'shopId',
          success: function (res) {
            console.log(res.data)
            that.setData({
              shopId: res.data
            })
            wx.getStorage({
              key: 'bizId',
              success: function (res) {
                console.log(res.data)
                that.setData({
                  bizId: res.data
                })
                

              },
            })
          },
        })
      },
    })
  },

  onLoad:function(){

    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2];
    console.log('页面66666')
    console.log(prevPage)


    var that = this;
    wx.setNavigationBarTitle({
      title: '购买详情'
    });
    
    that.setData({
      buymenu: prevPage.data.buymenu,
      price: prevPage.data.price,
      storeNane: prevPage.data.storeNane
    });
  },

//提交订单
  sub:function(){

    var subdata = { bizId: 6, shopId: 6, memberId: 1 }

    subdata.memberId = this.data.memberId;
    subdata.shopId = this.data.shopId;
    subdata.bizId = this.data.bizId;
    
    console.log(subdata)

    wx.request({
      url: 'https://lingju360.natapp4.cc/miniapp/cat/orderFood/submitOrder',
      data: subdata,
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      method: 'POST',
      success: function (res) {
        console.log('--------------提交订单')
        console.log(res.data.data)
        if (res.data.code === 0){
        
          wx.showToast({
            title: '提交成功',
            icon: 'success',
            duration: 2000,
            success:function(){
              wx.redirectTo({
                url: '/page/order/index'
              })
            }
          })
          
        } else if (res.data.code === -1){
          wx.showToast({
            title: '提交失败',
            icon: 'success',
            duration: 2000
          })
        }
        
      }
    })
  }

})