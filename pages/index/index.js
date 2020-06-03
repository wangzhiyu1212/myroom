//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imageItems: [{
      id: 1,
      imgsrc: "/images/1.jpg"
    }, {
      id: 2,
      imgsrc: "/images/2.jpg"
    }, {
      id: 3,
      imgsrc: "/images/3.jpg"
    }],
    motto: 'Hello Mike',
    myTitle: '老婆 生日快乐',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    var that=this; // 这个地方非常重要，重置data{}里数据时候setData方法的this应为以及函数的this, 如果在下方的success直接写this就变成了wx.request()的this了
    wx.request({  
      url: 'http://localhost:8082/hello',  
      data:{},  //发送给后台的数据
      method:'GET',  
      header: {  
        'content-type': 'application/json'  
      },  
      success: function (res) {  
        console.log(res.data); //res.data相当于ajax里面的data,为后台返回的数据
        that.setData({ 
          _myhello: res.data
        })
      }  
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
