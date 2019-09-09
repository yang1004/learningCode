var { getMoiveList } = require('../../../utils/util.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    requestUrl:'',
    total:0,
    totalData:[],
    isEnd:false
  },
  /**
   * 处理发送请求的数据
   */
  handleMoiveList: function (data){
    if(data.length == 0){
      wx.hideNavigationBarLoading()
      this.data.isEnd = true
      wx.showToast({
        title: '已经到底啦'
      })
      return 
    }
    this.data.total = this.data.total + data.length
    this.data.totalData = this.data.totalData.concat(data)
    this.setData({ movies: this.data.totalData }, function () {
      wx.hideNavigationBarLoading()
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this
    var baseUrl = app.GOLBAL_DATA.baseUrl
    var type = options.type
    var requestUrl = ''
    var navigationBarTitleText = ''
    switch(type){
      case ('inTheaters'):
        requestUrl = baseUrl + 'in_theaters'
        navigationBarTitleText = '正在热映'
        break
      case ('comingSoon'):
        requestUrl = baseUrl + 'coming_soon'
        navigationBarTitleText = '即将上映'
        break
      case ('top250'):
        requestUrl = baseUrl + 'top250'
        navigationBarTitleText = '豆瓣Top250'
        break
    }
    //保存数据
    this.data.requestUrl = requestUrl
    wx.setNavigationBarTitle({
      title: navigationBarTitleText,
    })
    wx.showNavigationBarLoading()
    /*
    getMoiveList(requestUrl, function (data) {
      _this.setData({ movies: data },function(){
        wx.hideNavigationBarLoading()
      })
    })
    */
    getMoiveList(requestUrl,this.handleMoiveList)
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
   * 处理刷新数据
   */
  onPullDownRefresh: function () {
    var _this = this
    wx.showNavigationBarLoading()
    /*
    getMoiveList(this.data.requestUrl, function (data) {
      _this.setData({ movies: data }, function () {
        wx.hideNavigationBarLoading()
      })
    })
    */ 
    getMoiveList(this.data.requestUrl,this.handleMoiveList)
  }, 

  /**
   * 页面上拉触底事件的处理函数
   * 加载更多
   */
  onReachBottom: function () {
    if (this.data.isEnd){
      wx.showToast({
        title: '已经到底啦'
      })
      return 
    }
    wx.showNavigationBarLoading()
    var nextUrl = this.data.requestUrl + '?start='+this.data.total+'&count=20'
    getMoiveList(nextUrl, this.handleMoiveList)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})