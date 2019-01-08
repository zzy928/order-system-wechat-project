// pages/shopend/shopend.js
var shopdata;
var datashop;
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
    var that=this;//从缓存中获取最新的datashop和shpodata数据    
    wx.getStorage({
      key: 'datashop',
      success: function(res) {
        datashop = res.data;
      }
    })
    wx.getStorage({
      key: 'shopdata',
      success: function(res) {
        shopdata = res.data;
        that.jisuanprice();
        //绑定数据
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
    this.setData({
      shopdata: shopdata,
    })
  },
  // 点餐列表减
  listjian: function (e) {
    //console.log(shopdata)
    //console.log(datashop)   
    //更新shopdata数据
    var shopid = e.target.id;
    for (var i = 0; i < shopdata.length; i++) {
      if (shopid == shopdata[i].id) {
        shopdata[i].number -= 1;
        if (shopdata[i].number == 0) {
          if (i == 1) {
            shopdata[i].number = 1;
          } else {
            shopdata.splice(i, 1);
          }
        };
        this.setData({
          shopdata: shopdata
        })
        wx.setStorage({
          key: "shopdata",
          data: shopdata
        })
        this.jisuanprice();
        break;
      }
    }
    //更新datashop数据
    var dataid = e.target.id;
    for (var i = 0; i < datashop.length; i++) {
      for (var j = 0; j < datashop[i].list.length; j++) {
        //定位datashop中的位置，数量大于0才能减，否则无操作
        if (dataid == datashop[i].list[j].id && datashop[i].list[j].num > 0) {
          datashop[i].list[j].num -= 1;
          break;
        }
      }
    }
    wx.setStorage({
      key: "datashop",
      data: datashop
    })
  },
  // 点餐列表加
  listadd: function (e) {
    var shopid = e.target.id;
    for (var i = 0; i < shopdata.length; i++) {
      if (shopid == shopdata[i].id) {
        shopdata[i].number += 1;
        this.setData({
          shopdata: shopdata
        })
        this.jisuanprice()
        wx.setStorage({
          key: "shopdata",
          data: shopdata
        })
        break;
      }
    }

    //更新datashop数据
    var dataid = e.target.id;
    for (var i = 0; i < datashop.length; i++) {
      for (var j = 0; j < datashop[i].list.length; j++) {
        if (dataid == datashop[i].list[j].id) {
          datashop[i].list[j].num += 1;
          break;
        }
      }
    }
    wx.setStorage({
      key: "datashop",
      data: datashop
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
