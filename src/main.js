import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/user/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [
        {
          // 图书列表展示，点击进入详情页，可评论、下载、收藏、点赞？
          pagePath: 'pages/index/main',
          text: '首页'
        },
        {
          pagePath: 'pages/logs/main',
          text: '热门'
        },
        {
          // 登录信息，扫描添加图书，上传图书，我的评论，我的收藏，我的点赞，我的下载
          pagePath: 'pages/user/main',
          text: '个人中心'
        }
      ]
    }
  }
}
