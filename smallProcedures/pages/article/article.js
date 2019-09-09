var {articles} = require('../../data/dbs.js')
// pages/article/article.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // text:'abcd',
    articles:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log('article onLoad')
    /*
    var articles = [
      {
        avatar: '/images/logo/9.jpeg',
        date: '2019-10-01',
        title: '我是文章标题1',
        img: '/images/article/GF1.jpeg',
        desc: '我是描述1',
        star: 30,
        view: 20
      },
      {
        avatar: '/images/logo/9.jpeg',
        date: '2019-10-10',
        title: '我是文章标题2',
        img: '/images/article/GF1.jpeg',
        desc: '我是描述2',
        star: 30,
        view: 20
      }
    ]
    */
    /*
    this.setData({ articles: articles},function(){
      console.log('2::',this.data.articles)
    }.bind(this))
    console.log('1::',this.data.articles)
    */
    this.setData({ articles: articles })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //console.log('article onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //console.log('article onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    //console.log('article onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    //console.log('article onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    //console.log('article onPullDownRefresh')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //console.log('article onReachBottom')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    //console.log('article onShareAppMessage')
  },

  tapDetail:function(ev){
    var articleId = ev.currentTarget.dataset.articleId
    wx.navigateTo({
      url: '/pages/article/article-detail/article-detail?articleId=' + articleId,
    })
  }
})