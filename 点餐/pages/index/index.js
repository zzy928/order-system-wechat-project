//index.js
//获取应用实例
var app = getApp();
var shopdata = [
  { id: "", number: "" },
  { id: "Z0", number: 1, name: "餐位费/人", price: 2.00 }
];//存放菜单数据；
var datashop = [{ title: "", list: [] }];//存放分类数据；
var data = [
  { name: "日式厚松饼", num: 0, type: "店长推荐", price: 28.00, id: "Z1", imgurl: "http://www.imiaoyy.cf/wp-content/uploads/photo-gallery/recommendations/thumb/%E6%97%A5%E5%BC%8F%E8%88%92%E8%8A%99%E8%95%BE%E5%8E%9A%E6%9D%BE%E9%A5%BC.jpg" },
  { name: "香菜拌豆干", num: 0, type: "店长推荐", price: 38.00, id: "Z2", imgurl: "http://www.imiaoyy.cf/wp-content/uploads/photo-gallery/recommendations/thumb/%E9%A6%99%E8%8F%9C%E6%8B%8C%E8%B1%86%E5%B9%B2.jpg" },
  { name: "番茄萝卜炖排骨", num: 0, type: "热菜", price: 38.00, id: "Z3", imgurl: "http://www.imiaoyy.cf/wp-content/uploads/photo-gallery/hot_dishes/thumb/%E7%95%AA%E8%8C%84%E8%90%9D%E5%8D%9C%E7%82%96%E6%8E%92%E9%AA%A8.jpg" },
  { name: "泡椒炒肉丝", num: 0, type: "热菜", price: 28.00, id: "Z4", imurl: "http://www.imiaoyy.cf/wp-content/uploads/photo-gallery/hot_dishes/thumb/%E6%B3%A1%E6%A4%92%E7%82%92%E8%82%89%E4%B8%9D.jpg" },
  { name: "酸豆角炒肉沫", num: 0,type: "热菜", price: 18.00, id: "Z5", imgurl: "http://www.imiaoyy.cf/wp-content/uploads/photo-gallery/hot_dishes/thumb/%E9%85%B8%E8%B1%86%E8%A7%92%E7%82%92%E8%82%89%E6%B2%AB.jpg" },
  { name: "香菜拌豆干", num: 0,type: "凉菜", price: 38.00, id: "Z6", imgurl: "http://www.imiaoyy.cf/wp-content/uploads/photo-gallery/cold_dishes/thumb/%E9%A6%99%E8%8F%9C%E6%8B%8C%E8%B1%86%E5%B9%B2.jpg" },
  { name: "酸辣藕片", num: 0, type: "凉菜", price: 18.00, id: "Z7", imgurl: "http://www.imiaoyy.cf/wp-content/uploads/photo-gallery/cold_dishes/thumb/%E9%85%B8%E8%BE%A3%E8%97%95%E7%89%87.jpg" },
  { name: "电饭煲无水卤牛腱", num: 0,type: "凉菜", price: 48.00, id: "Z8", imgurl: "http://www.imiaoyy.cf/wp-content/uploads/photo-gallery/cold_dishes/thumb/%E7%94%B5%E9%A5%AD%E7%85%B2%E6%97%A0%E6%B0%B4%E5%8D%A4%E7%89%9B%E8%85%B1%E5%AD%90.jpg" },
  { name: "黄瓜拌海蜇", num: 0,type: "凉菜", price: 48.00, id: "Z9", imgurl: "http://www.imiaoyy.cf/wp-content/uploads/photo-gallery/cold_dishes/thumb/%E9%BB%84%E7%93%9C%E6%8B%8C%E6%B5%B7%E8%9C%87.jpg" },
  { name: "鳕鱼大馄饨", num: 0,type: "店长推荐", price: 28.00, id: "Z10", imgurl: "http://www.imiaoyy.cf/wp-content/uploads/photo-gallery/recommendations/thumb/%E9%B3%95%E9%B1%BC%E5%A4%A7%E9%A6%84%E9%A5%A8.jpg" },
  { name: "小裙子馒头", num: 0, type: "店长推荐", price: 18.00, id: "Z11", imgurl: "http://www.imiaoyy.cf/wp-content/uploads/photo-gallery/recommendations/thumb/%E5%B0%8F%E8%A3%99%E5%AD%90%E9%A6%92%E5%A4%B4.jpg" },
  { name: "黑椒牛排", num: 0,type: "西餐", price: 48.00, id: "Z12", imgurl: "http://www.imiaoyy.cf/wp-content/uploads/photo-gallery/western_dishes/thumb/%E9%BB%91%E6%A4%92%E7%89%9B%E6%8E%92.jpg" },
  { name: "红酒牛排", num: 0,type: "西餐", price: 58.00, id: "Z13", imgurl: "http://www.imiaoyy.cf/wp-content/uploads/photo-gallery/western_dishes/thumb/%E7%BA%A2%E9%85%92%E7%89%9B%E6%8E%92.jpg" },
  { name: "火烧云吐司", num: 0,type: "西餐", price: 28.00, id: "Z14", imgurl: "http://www.imiaoyy.cf/wp-content/uploads/photo-gallery/western_dishes/thumb/%E7%81%AB%E7%83%A7%E4%BA%91%E5%90%90%E5%8F%B8.jpg" },
  { name: "芝士焗番茄", type: "西餐", price: 28.00, id: "Z15", imgurl: "http://www.imiaoyy.cf/wp-content/uploads/photo-gallery/western_dishes/thumb/%E8%8A%9D%E5%A3%AB%E7%84%97%E7%95%AA%E8%8C%84.jpg" },
  { name: "黑胡椒牛排", num: 0,type: "西餐", price: 48.00, id: "Z16", imgurl: "http://www.imiaoyy.cf/wp-content/uploads/photo-gallery/western_dishes/thumb/%E9%BB%91%E8%83%A1%E6%A4%92%E7%89%9B%E6%8E%92.jpg" },
  { name: "雪梨花胶海参汤", num: 0,type: "汤羹", price: 12.00, id: "Z17", imgurl: "http://www.imiaoyy.cf/wp-content/uploads/photo-gallery/soup/thumb/%E9%9B%AA%E6%A2%A8%E8%8A%B1%E8%83%B6%E6%B5%B7%E5%8F%82%E6%B1%A4.jpg" },
  { name: "南瓜牛奶浓汤", num: 0,type: "汤羹", price: 12.00, id: "Z18", imgurl: "http://www.imiaoyy.cf/wp-content/uploads/photo-gallery/soup/thumb/%E5%8D%97%E7%93%9C%E7%89%9B%E5%A5%B6%E6%B5%93%E6%B1%A4.jpg" },
  { name: "养血红枣当归排骨", num: 0,type: "汤羹", price: 12.00, id: "Z19", imgurl: "http://www.imiaoyy.cf/wp-content/uploads/photo-gallery/soup/thumb/%E5%85%BB%E8%A1%80%E7%BA%A2%E6%9E%A3%E5%BD%93%E5%BD%92%E6%8E%92%E9%AA%A8%E6%B1%A4.jpg" },
  { name: "紫菜鸡蛋面皮汤", num: 0,type: "汤羹", price: 8.00, id: "Z20", imgurl: "http://www.imiaoyy.cf/wp-content/uploads/photo-gallery/soup/thumb/%E7%B4%AB%E8%8F%9C%E9%B8%A1%E8%9B%8B%E9%9D%A2%E7%9A%AE%E6%B1%A4.jpg" },
  { name: "年糕汤", num: 0,type: "汤羹", price: 12.00, id: "Z21", imgurl: "http://www.imiaoyy.cf/wp-content/uploads/photo-gallery/soup/thumb/%E5%B9%B4%E7%B3%95%E6%B1%A4.jpg" },
  { name: "紫薯球", num: 0,type: "小吃", price: 18.00, id: "Z22", imgurl: "http://www.imiaoyy.cf/wp-content/uploads/photo-gallery/snakes/thumb/%E7%B4%AB%E8%96%AF%E7%90%83.jpg" },
  { name: "自制大米锅巴", num: 0, type: "小吃", price: 18.00, id: "Z23", imgurl: "http://www.imiaoyy.cf/wp-content/uploads/photo-gallery/snakes/thumb/%E8%87%AA%E5%88%B6%E5%A4%A7%E7%B1%B3%E9%94%85%E5%B7%B4.jpg" },
  { name: "炸肠", num: 0,type: "小吃", price: 12.00, id: "Z24", imgurl: "http://www.imiaoyy.cf/wp-content/uploads/photo-gallery/snakes/thumb/%E7%82%B8%E8%82%A0.jpg" },
  { name: "淡奶油蛋白吐司", num: 0, type: "店长推荐", price: 28.00, id: "Z25", imgurl: "http://www.imiaoyy.cf/wp-content/uploads/photo-gallery/recommendations/thumb/%E6%B7%A1%E5%A5%B6%E6%B2%B9%E8%9B%8B%E7%99%BD%E5%90%90%E5%8F%B8.jpg" },
  { name: "清淡红薯粉", num: 0,type: "主食", price: 18.00, id: "Z26", imgurl: "http://www.imiaoyy.cf/wp-content/uploads/photo-gallery/staple_dishes/thumb/%E6%B8%85%E6%B7%A1%E7%BA%A2%E8%96%AF%E7%B2%89.jpg" },
  { name: "咖喱鸡肉饭", num: 0, type: "主食", price: 28.00, id: "Z27", imgurl: "http://www.imiaoyy.cf/wp-content/uploads/photo-gallery/staple_dishes/thumb/%E5%92%96%E5%96%B1%E9%B8%A1%E8%82%89%E9%A5%AD.jpg" },
  { name: "鳕鱼大馄饨", num: 0,type: "主食", price: 28.00, id: "Z28", imgurl: "http://www.imiaoyy.cf/wp-content/uploads/photo-gallery/staple_dishes/thumb/%E9%B3%95%E9%B1%BC%E5%A4%A7%E9%A6%84%E9%A5%A8.jpg" },

];
// 用来存储高度的数组
var dataheith = [0];
// 左侧id
var linheightid = 0;
Page({
  data: {
    motto: 'DianCanYa!',
    userInfo: {},
    scroll: "scroll"
  },
  //页面加载时触发，程序1次运行，一个页面只会调用1次
  onLoad: function () {
    //console.log("加载1次")
    //每次编译，清除缓存
    wx.clearStorage();
    // 构造datashop表
    for (var i = 0; i < data.length; i++) {
      for (var j = 0; j < datashop.length; j++) {
        if (data[i].type == datashop[j].title) {
          datashop[j].list.push(data[i]);
          break;
        } else if (j == datashop.length - 1) {
          datashop.push({ title: data[i].type, list: [data[i]] });
          break;
        }
      }
    };
    datashop.splice(0, 1)
    //console.log(datashop)    
    // 计算每个分类开始的高度
    var indexheight = 0
    for (var i = 0; i < datashop.length; i++) {
      indexheight += datashop[i].list.length * 80 + 20 + 36 + 20;
      dataheith.push(indexheight);
    }
    //原始datashop放入缓存区
    wx.setStorage({
      key: "datashop",
      data: datashop
    })
    wx.setStorage({
      key: "shopdata",
      data: shopdata
    })
  },

  //页面显示/切入前台时触发，可触发多次
  onShow: function () {
    //console.log("加载N次")
    //下面这句，必须有
    var that = this;
    //从缓存中读入datashop
    wx.getStorage({
      key: 'datashop',
      fail: function (res) {
        console.log("读取失败，缓存区中无datashop数据")
      },
      success: function (res) {
        console.log("读取成功,datashop得到更新")
        datashop = res.data;
        //绑定数据
        that.setData({
          rightdata: datashop,
          linheightid: linheightid
        })
      },
    })
    //从缓存中读入shopdata数据,开始时，缓存中的shopdata只有2行
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
    linheightid = e.target.id;
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
    var scrolltop = e.detail.scrollTop;
    var scrollbotton = e.detail.scrollTop
    for (var i = 0; i < dataheith.length; i++) {
      if (scrolltop <= dataheith[i - 1]) {
        if (linheightid != i) {
          linheightid = i - 2;
          this.setData({
            linheightid: linheightid
          })
        }
        break
      }
    }
  },

  // 添加
  addshop: function (e) {
    var shopid = e.target.id;
    var price = e.target.dataset.price;
    var name = e.target.dataset.name;
    //更新datashop数据，逐个比较id
    var dataid = e.target.id;
    //外循环：菜的类别
    for (var i = 0; i < datashop.length; i++) {
      //console.log(datashop.length);
      //内循环：每类下的菜数量
      for (var j = 0; j < datashop[i].list.length; j++) {
        //console.log(datashop[i].list.length);
        if (dataid == datashop[i].list[j].id) {
          datashop[i].list[j].num += 1;
          this.setData({
            rightdata: datashop,
          })
          //console.log(datashop[i].list[j].name, datashop[i].list[j].num);
          //找到就退出内循环，我没有退出外循环，所以进行了一些无用的id对比
          break;
        }
      }
    }
    // 更新后的datashop放入缓存区
    wx.setStorage({
      key: "datashop",
      data: datashop
    })

    //更新shopdata数据
    for (var i = 0; i < shopdata.length; i++) {
      //与已点的菜逐个比较，看是否已经点了      
      if (shopid == shopdata[i].id) {
        shopdata[i].number += 1;
        break;
      }
    }
    // 点击的是新菜，直接加入菜单
    if (i == shopdata.length) {
      shopdata.push({ id: shopid, number: 1, name: name, price: price });
    }
    //更新的shopdata放入缓存区
    wx.setStorage({
      key: "shopdata",
      data: shopdata
    })
    //查看缓存区的datashop和shopdata是否更新  
    /*wx.getStorage({
      key: 'datashop',
      success: function (res) {
        datashop = res.data;
        console.log(res.data)
      }
    })
    wx.getStorage({
      key: 'shopdata',
      success: function (res) {
        datashop = res.data;
        console.log(res.data)
      }
    })*/
  },

  // 减少
  jianshop: function (e) {
    var shopid = e.target.id;
    var price = e.target.dataset.price;
    var name = e.target.dataset.name;
    //更新datashop数据
    var dataid = e.target.id;
    for (var i = 0; i < datashop.length; i++) {
      for (var j = 0; j < datashop[i].list.length; j++) {
        //定位datashop中的位置，数量大于0才能减，否则无操作
        if (dataid == datashop[i].list[j].id && datashop[i].list[j].num > 0) {
          datashop[i].list[j].num -= 1;
          this.setData({
            rightdata: datashop,
          })
          break;
        }
      }
    }
    wx.setStorage({
      key: "datashop",
      data: datashop
    })

    //更新shopdata数据
    for (var i = 0; i < shopdata.length; i++) { //定位点击的菜     
      if (shopid == shopdata[i].id) {
        if (shopdata[i].number > 0) {
          shopdata[i].number -= 1;
        }
        if (shopdata[i].number == 0) {
          if (i == 1) {
            shopdata[i].number = 1;
          }
          else {
            shopdata.splice(i, 1);
          }
          break;
        }
      }
    }
    //放入缓存区
    wx.setStorage
      ({
        key: "shopdata",
        data: shopdata
      })
  },
  //Page末尾    
})
