//index.js
//获取应用实例
const app = getApp()

Page({
  /*
  tapText:function(){
    console.log('tapText...')
  },
  tapView:function(){
    console.log('tapView...')
  }
  */
  tapMotto:function(){
    /*
    wx.redirectTo({
      url: '/pages/article/article'
    })*/
    /*
    wx.navigateTo({
      url: '/pages/article/article',
    })
    */
    wx.switchTab({
      url: '/pages/article/article',
    })
  }
})
