// pages/shopend/shopend.js
var shopdata;
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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
    var that=this;
    
    wx.getStorage({
      key: 'shopdata',
      success: function (res) {
        shopdata=res.data;
        console.log(shopdata);
        that.jisuanprice()
        that.setData({
          shopdata: shopdata
        })
      }
    })
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
   // 点餐
  diancan: function (e) {
    console.log(e);
    this.setData({
      shopdata: shopdata,
    })
  },
  // 点餐列表减
  listjian: function (e) {
    // console.log("点击的减", e);
    var shopid = e.target.id;
    for (var i = 0; i < shopdata.length; i++) {
      if (shopid == shopdata[i].id) {
        shopdata[i].nuber -= 1;
        if (shopdata[i].nuber == 0) {
          if(i==1){
            shopdata[i].nuber=1;
          }else{
            shopdata.splice(i, 1);
          }
        };

        this.setData({
          shopdata: shopdata
        })
        this.storage();
        this.jisuanprice()
        break;
      }
    }
  },
  // 点餐列表加
  listadd: function (e) {
    // console.log("点击加", e)
    var shopid = e.target.id;
    for (var i = 0; i < shopdata.length; i++) {
      if (shopid == shopdata[i].id) {
        // console.log(shopdata[i])
        shopdata[i].nuber += 1;
        this.setData({
          shopdata: shopdata
        })
        this.jisuanprice()
        this.storage()
        break;
      }

    }
  },
  // 缓存点餐列表
  storage:function(){
    console.log(shopdata)
    wx.setStorage({
      key: "shopdata",
      data: shopdata
    })
  },
  // 计算价钱
  jisuanprice:function(){
    var price=0;
  
    for (var i = 1; i < shopdata.length; i++) {
      var price1 = shopdata[i].nuber * shopdata[i].price;
      // console.log(price1)
      price += price1;
    }
    this.setData({
      price: price
    })
  },
  // 付款
  fukun:function(){
    // 付款接口
    wx.showModal({
      title: '提示',
      content: '调用付款接口',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    wx.requestPayment({
      'timeStamp': '',
      'nonceStr': '',
      'package': '',
      'signType': 'MD5',
      'paySign': '',
      'success': function (res) {
      },
      'fail': function (res) {
      }
    })
  }
})