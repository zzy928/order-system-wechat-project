//index.js
//获取应用实例
var app = getApp();
var shopdata = [
  { id: "", nuber:""},
  { id: "yy", nuber: 1, name: "用餐人数", price:8.00 }
  ];//存放菜单数据；
var datashop = [{ title: "", list: []}];//存放分类数据；
var data = [
  { nama: "1", type: "分类2", price: 111.00, id: "Z1", imgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494591751749&di=3bc4ac241dc5cefa159a0dbfe1b97a03&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F4%2F53fee27a01094.jpg" },
  { nama: "2", type: "分类2", price: 111.00, id: "Z2", },
  { nama: "3", type: "分类1", price: 111.00, id: "Z3", },
  { nama: "4", type: "分类1", price: 111.00, id: "Z4", },
  { nama: "5", type: "分类1", price: 111.00, id: "Z5", },
];
// 用来存储高度的数组
var dataheith = [0];
// 左侧id
var linheightid = 0;
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    scroll: "scroll"
  },
  onLoad: function () {
    // 分组获取的数据
    wx.clearStorage();
    wx.setStorage({
      key: "shopdata",
      data: shopdata
    })
    for (var i = 0; i < data.length; i++) {
      for (var j = 0; j < datashop.length; j++) {
        if (data[i].type == datashop[j].title) {
          datashop[j].list.push(data[i]);
          break;
        } else if ( j == datashop.length - 1) {
          datashop.push({ title: data[i].type, list: [data[i]] });
          break;
        }
       
      }
    };
    console.log(datashop)
     datashop.splice(0,1)
    
    // 计算每个分类开始的高度
    var indexheight = 0
    for (var i = 0; i < datashop.length; i++) {
      indexheight += datashop[i].list.length * 80 + 20 + 36 + 20;
      //  console.log("每类的长度", data[i].length);
      dataheith.push(indexheight);
      //  console.log("高度数组", dataheith)
    }
    this.setData({
      rightdata: datashop,
      linheightid: linheightid
    });
  },
  onShow: function () {
    wx.getStorage({
      key: 'shopdata',
      success: function (res) {
        shopdata = res.data;
      }
    })
  },
  // 左侧点击事件
  clickbtn: function (e) {
    var that = this;
    // console.log("你点击的ID为：", e.target.id);
    linheightid = e.target.id;
    // console.log(typeof id)
    this.setData({
      intoid: "id" + linheightid,
      linheightid: linheightid,
      scroll: ""
    });
    // 阻止scroll冒泡
    setTimeout(function () {
      that.setData({
        scroll: "scroll"
      });
    }, 500)
  },
  // 滚动触发
  scroll: function (e) {
    //  console.log(e);
    var scrolltop = e.detail.scrollTop;
    var scrollbotton = e.detail.scrollTop
    for (var i = 0; i < dataheith.length; i++) {
      if (scrolltop <= dataheith[i - 1]) {
        // console.log(i);
        // console.log(scrolltop)
        if (linheightid != i) {

          linheightid = i - 2;
          // console.log(linheightid)
          this.setData({
            linheightid: linheightid
          })
        }
        break
      }
    }
  },
  // 添加按钮
  addshop: function (e) {
    // console.log(e.target);
    var shopid = e.target.id;
    var price = e.target.dataset.price;
    var name = e.target.dataset.name
    for(var i=0;i<shopdata.length;i++){
        if(shopid==shopdata[i].id){
          shopdata[i].nuber+=1;
          break;
        } else if (i == shopdata.length-1){
          shopdata.push({id:shopid,nuber:1,name:name,price:price});
          wx.setStorage({
            key: "shopdata",
            data: shopdata
          })
          break;
        }
    }
    // console.log(shopdata)
  },
 
})
