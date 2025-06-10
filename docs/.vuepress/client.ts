import { defineClientConfig } from 'vuepress/client'
// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
// import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
// import Swiper from 'vuepress-theme-plume/features/Swiper.vue'
import ShareButton from './components/ShareButton.vue'

// import './theme/styles/custom.css'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // 注册钱包按钮组件
    app.component('ShareButton', ShareButton)

    // 在客户端挂载时执行
    if (typeof window !== 'undefined') {
      // 检查是否已有保存的钱包地址
      const checkSavedAddress = () => {
        const cookies = document.cookie.split(';')
        for(let cookie of cookies) {
          const [name, value] = cookie.trim().split('=')
          if(name === 'shareAddress') {
            console.log('已保存的钱包地址:', value)
            break
          }
        }
      }

      // 在路由更新后检查钱包地址
      router.afterEach((to) => {
        // 只在特定页面检查
        if (to.path.includes('/document/userDoc/')) {
          // 等待页面内容加载完成
          setTimeout(() => {
            checkSavedAddress()
          }, 100)
        }
      })
    }
  }
})
