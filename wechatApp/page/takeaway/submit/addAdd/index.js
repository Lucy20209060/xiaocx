var app = getApp()
Page({
  data: {
    id: 1,
    country: '',
    province: '广东省', //省份
    city: '深圳市',//城市
    region: [],
    area: '福田区',//区县
    is_default:0, //是否默认
    username:'', //用户名
    phone:'', // 电话
    address:'', //详细地址
    items: [
      { name: '11', value: '是否选为默认地址' }
    ]

  },
  onLoad: function (option) {
    var oarr = [];
    oarr[0] = this.data.province;
    oarr[1] = this.data.city;
    oarr[2] = this.data.area;
    this.setData({
      region: oarr
    })
  },


  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },

  inputaddress: function (e) {
    this.setData({
      address: e.detail.value
    })
  },

  inputusername: function (e) {
    this.setData({
      username: e.detail.value
    })
  },

  inputphone: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },

  checkboxChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      is_default: e.detail.value
    })
  },

  //地图选地址

  location: function () {
    var that = this;
    wx.chooseLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res)

        that.setData({
          add: res.address
        })

        var subdata = {};
        subdata.latitude = res.latitude;
        subdata.longitude = res.longitude;
        console.log(subdata)


      }
    })
  },

  //修改资料
  save: function () {
    var that = this;
    

    if (this.data.username.length ==0){
      wx.showToast({
        title: '请输入联系人！',
        icon: 'loading',
        image: '/image/i/x.png',
        duration: 1000
      })
    }else if (!(/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(this.data.phone))) {
      wx.showToast({
        title: '手机号有误！',
        icon: 'loading',
        image: '/image/i/x.png',
        duration: 1000
      })
    } else if (this.data.address.length == 0) {
      wx.showToast({
        title: '请输入详细地址！',
        icon: 'loading',
        image: '/image/i/x.png',
        duration: 1000
      })
    } else{
      var subdata = {}

      subdata.name = this.data.username;
      subdata.phone = this.data.phone;
      subdata.address = this.data.address;
      subdata.province = this.data.region[0];
      subdata.city = this.data.region[1];
      subdata.area = this.data.region[2];
      subdata.isDefault = this.data.is_default == '11'? true: false;

      app.commonAjax('cat/address/insertAddress', ['bizId', 'memberId'], subdata, function (res) {

        console.log(res)

        wx.navigateBack({
          delta: 1
        })

      },app)
    }


  },
})