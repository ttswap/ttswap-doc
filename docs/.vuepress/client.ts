import { defineClientConfig } from 'vuepress/client'
// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
// import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
// import Swiper from 'vuepress-theme-plume/features/Swiper.vue'
import ShareButtonZh from './components/ShareButtonZh.vue'
import ShareButtonEn from './components/ShareButtonEn.vue'

// import './theme/styles/custom.css'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // 注册交易按钮组件
    app.component('ShareButtonZh', ShareButtonZh)
    app.component('ShareButtonEn', ShareButtonEn)

    // 在客户端挂载时执行
    if (typeof window !== 'undefined') {
      // 获取cookie的函数
      const getCookie = (name) => {
        if (typeof document === 'undefined') return null
        const cookies = document.cookie.split(';')
        for (let cookie of cookies) {
          const [cookieName, cookieValue] = cookie.trim().split('=')
          if (cookieName === name) {
            return decodeURIComponent(cookieValue)
          }
        }
        return null
      }

      // 处理交易按钮点击的函数
      const handleTradeButtonClick = (event) => {
        event.preventDefault()
        
        const shareAddress = getCookie('shareUser')
        let tradeUrl = 'https://app.ttswap.io'
        
        if (shareAddress) {
          tradeUrl = 'https://app.ttswap.io?'+shareAddress;
        } 
        window.open(tradeUrl, '_blank')
      }

      // 替换交易按钮行为的函数
      const replaceTradeButtonBehavior = () => {
        let button=document.getElementsByClassName('vp-button medium brand')[0]
          // 添加新的事件监听器
        button.addEventListener('click', handleTradeButtonClick)   
      }

      // 在路由更新后执行
      router.afterEach((to) => {
        // 延迟执行以确保DOM已更新
        setTimeout(() => {
          replaceTradeButtonBehavior()
        }, 100)
      })

      // 页面首次加载时也执行
      setTimeout(() => {
        replaceTradeButtonBehavior()
      }, 500)
    }
  }
})

