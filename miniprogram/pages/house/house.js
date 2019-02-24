Page({

  /**
   * 页面的初始数据
   */
  data: {
    houses: [{ "image": "", "name": "wangyan", "price": "$22" }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var houses = [{ "image": "https://image.xiaozhustatic1.com/00,800,533/14,0,22,13329,1800,1201,cc226b90.jpg", "name": "清新森林风", "price": "¥798起"},
      { "image": "https://image.xiaozhustatic1.com/00,800,533/14,0,22,13329,1800,1201,cc226b90.jpg", "name": "清新森林风", "price": "¥798起" },
      { "image": "https://image.xiaozhustatic1.com/00,800,533/14,0,22,13329,1800,1201,cc226b90.jpg", "name": "清新森林风", "price": "¥798起" },
      { "image": "https://image.xiaozhustatic1.com/00,800,533/14,0,22,13329,1800,1201,cc226b90.jpg", "name": "清新森林风", "price": "¥798起" },
      { "image": "https://image.xiaozhustatic1.com/00,800,533/14,0,22,13329,1800,1201,cc226b90.jpg", "name": "清新森林风", "price": "¥798起" },
      { "image": "https://image.xiaozhustatic1.com/00,800,533/14,0,22,13329,1800,1201,cc226b90.jpg", "name": "清新森林风", "price": "¥798起" }];
    this.setData({
      houses: houses
    });
  },
})