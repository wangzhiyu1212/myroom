// pages/photo/photo.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,  //对应样式变化
    scrollTop: 0,  //用作跳转后右侧视图回到顶部
    screenArray: [
      {
        screenId:1,
        screenName: '相识'
      },
      {
        screenId: 2,
        screenName: '婚礼'
      },
      {
        screenId: 3,
        screenName: '西瓜'
      },
      {
        screenId: 4,
        screenName: '日本'
      },
      {
        screenId: 5,
        screenName: '韩国'
      },
      {
        screenId: 6,
        screenName: '长滩'
      }
    ], //左侧导航栏内容
    screenId: "",  //后台查询需要的字段
    childrenArray: {
      showImageUrl: '',
      childrenScreenArray: [
        {
          screenName: '休闲零食',
          childrenScreenArray: [
            {
              screenId: 1,
              showImageUrl: '/images/1.jpg',
              screenName: '糖果'
            },
            {
              screenId: 2,
              showImageUrl: '/images/2.jpg',
              screenName: '新疆核桃'
            },
          ]
        },
        {
          screenName: '手机数码',
          childrenScreenArray: [
            {
              screenId: 1,
              showImageUrl: '/images/3.jpg',
              screenName: 'vivo手机'
            }
          ]
        },
      ]
    }, //右侧内容
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  navbarTap: function (e) {
    var that = this;
    console.log(e);
    this.setData({
      currentTab: e.currentTarget.id,   //按钮CSS变化
      screenId: e.currentTarget.dataset.screenid,
      scrollTop: 0,   //切换导航后，控制右侧滚动视图回到顶部
    })
    //刷新右侧内容的数据
    var screenId = this.data.screenId;

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

  }
})