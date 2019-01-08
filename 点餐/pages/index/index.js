//index.js
//获取应用实例
var app = getApp();
var shopdata = [
  { id: "", number: "" },
  { id: "Z0", number: 1, name: "餐位费/人", price: 2.00 }
];//存放菜单数据；
var datashop = [{ title: "", list: [] }];//存放分类数据；
var data = [
  { name: "红焖滋补羊", num: 0, type: "新菜推荐", price: 88.00, id: "Z1", },
  { name: "客家清炖鸡", num: 0, type: "新菜推荐", price: 88.00, id: "Z2", },
  { name: "梅菜扣肉", num: 0, type: "新菜推荐", price: 48.00, id: "Z3", imgurl: "../../img/Z3.png" },
  { name: "辣味芋头羹", num: 0, type: "新菜推荐", price: 36.00, id: "Z4", },
  { name: "砂锅馋嘴蛙", num: 0, type: "新菜推荐", price: 42.00, id: "Z5",  },
  { name: "红葱头焗蛋", num: 0, type: "新菜推荐", price: 28.00, id: "Z6",  },
  { name: "清捞腐竹", num: 0, type: "凉菜", price: 26.00, id: "Z7",  },
  { name: "上汤娃娃菜", num: 0, type: "凉菜", price: 25.00, id: "Z8",  },
  { name: "松子玉米", num: 0, type: "凉菜", price: 32.00, id: "Z9",  },
  { name: "上汤菜心", num: 0, type: "凉菜", price: 25.00, id: "Z10", },
  { name: "客家酿豆腐", num: 0, type: "热菜", price: 28.00, id: "Z11",  },
  { name: "阿具手撕鸡", num: 0, type: "热菜", price: 40.00, id: "Z12",  },
  { name: "酸菜炒大肠", num: 0, type: "热菜", price: 38.00, id: "Z13",  },
  { name: "手撕包菜", num: 0, type: "热菜", price: 20.00, id: "Z14", },
  { name: "藕尖炒牛肉", num: 0, type: "热菜", price: 48.00, id: "Z15",  },
  { name: "胡椒猪肚", num: 0, type: "热菜", price: 48.00, id: "Z16",  },
  { name: "酸菜鱼", num: 0, type: "热菜", price: 64.00, id: "Z17",  },
  { name: "小炒肉", num: 0, type: "热菜", price: 25.00, id: "Z18", },
  { name: "红焖肉", num: 0, type: "热菜", price: 38.00, id: "Z19",  },
  { name: "紫苏焖土鸭", num: 0, type: "热菜", price: 58.00, id: "Z20",  },
  { name: "客家三拼", num: 0, type: "热菜", price: 58.00, id: "Z21",  },
  { name: "清蒸鲈鱼", num: 0, type: "热菜", price: 50.00, id: "Z22",  },
  { name: "土猪汤", num: 0, type: "汤类", price: 13.80, id: "Z23",  },
  { name: "香芋南瓜煲", num: 0, type: "汤类", price: 18.00, id: "Z24", },
  { name: "五指毛桃汤", num: 0, type: "汤类", price: 48.00, id: "Z25",  },
  { name: "钵仔饭", num: 0, type: "主食", price: 18.00, id: "Z26", },
  { name: "酱油炒饭", num: 0, type: "主食", price: 10.00, id: "Z27",  },
  { name: "客家小面", num: 0, type: "主食", price: 15.00, id: "Z28", },
  { name: "红糖冰粉", num: 0, type: "小食", price: 10.00, id: "Z29",  },
  { name: "蛋饺", num: 0, type: "小食", price: 15.00, id: "Z30", },
  { name: "水果拼盘", num: 0, type: "小食", price: 20.00, id: "Z31", },
  { name: "冰淇淋甜筒", num: 0, type: "小食", price: 4.00, id: "Z32", },
  { name: "哈尔滨啤酒", num: 0, type: "酒水", price: 5.00, id: "Z33", },
  { name: "海之蓝", num: 0, type: "酒水", price: 168.00, id: "Z34", },
  { name: "可口可乐", num: 0, type: "酒水", price: 10.00, id: "Z35", },
  { name: "儿童座椅", num: 0, type: "其他", price: 0.00, id: "Z36", },
  { name: "纸巾", num: 0, type: "其他", price: 1.00, id: "Z37", },
  { name: "大娘水饺", num: 0, type: "主食", price: 20.00, id: "Z37", },
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
