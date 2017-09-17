var app = getApp()
Page({
  data: {
    array: ['男', '女'],
    index: 0,
  },
  onLoad: function () {
    
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  }
})