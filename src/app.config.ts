export default {
  pages: ['pages/home/index', 'pages/my/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    selectedColor: '#1050a6',
    borderStyle: 'white',
    list: [
      {
        text: '้ฆ้กต',
        pagePath: 'pages/home/index',
        iconPath: 'assets/images/tabs/home.png',
        selectedIconPath: 'assets/images/tabs/home.png',
      },
      {
        text: 'ๆ็',
        pagePath: 'pages/my/index',
        iconPath: 'assets/images/tabs/my-s.png',
        selectedIconPath: 'assets/images/tabs/my-s.png',
      },
    ],
  },
};
