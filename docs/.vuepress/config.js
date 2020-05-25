module.exports = {
    themeConfig: {
      navbar: true,  //导航栏是否启用
      logo: '/assets/img/topic.png',  //log
      nav: [                //导航栏
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/about' },
        {
            text: 'Languages',
            items: [
              { text: 'Group1', items: [
                { text: 'Home', link: '/' },
                { text: 'Guide', link: '/about' },
              ] },
              { text: 'Group2', items: [
                { text: 'Home', link: '/' },
                { text: 'Guide', link: '/about' },
              ] }
            ]
          },
        { text: 'External', link: 'https://baidu.com' },
      ]
    }
  }