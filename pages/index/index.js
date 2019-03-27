// pages/index/index.js
var utils = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    order_num: 2,
    date: '2019-03-27',
    nostart: 100,
    underway: 100,
    end: 100,
    arr: [{
      work_msg: "洗车,充电...",
      create_time: "2019-03-27 08:16:39",
      create_person: "李明俊",
      work_statu: "进行中",
      position_adr: "深圳市大鹏新区人民路2号"
    }, {
      work_msg: "洗车,充电...",
      create_time: "2019-03-27 08:16:39",
      create_person: "李明俊",
      work_statu: "进行中",
      position_adr: "深圳市大鹏新区人民路2号"
    }, {
      work_msg: "洗车,充电...",
      create_time: "2019-03-27 08:16:39",
      create_person: "李明俊",
      work_statu: "进行中",
      position_adr: "深圳市大鹏新区人民路2号"
    }]

  },
  bindTimeChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var TIME = utils.formatDate(new Date());
    this.setData({
      date: TIME
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    wx.setNavigationBarTitle({
      title: '工单',
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})