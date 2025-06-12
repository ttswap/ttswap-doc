<template>
  <a 
    class="vp-button vp-button-brand"
    @click="handleClick"
    href="#"
    style="text-decoration: none;"
  >
    {{ text }}
  </a>
</template>

<script>
export default {
  name: 'TradeButton',
  props: {
    text: {
      type: String,
      default: '去交易'
    }
  },
  methods: {
    getCookie(name) {
      if (typeof document === 'undefined') return null
      
      const cookies = document.cookie.split(';')
      for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.trim().split('=')
        if (cookieName === name) {
          return decodeURIComponent(cookieValue)
        }
      }
      return null
    },
    
    handleClick(event) {
      event.preventDefault()
      
      const shareAddress = this.getCookie('shareaddress')
      let tradeUrl = 'https://app.ttswap.io'
      
      if (shareAddress) {
        tradeUrl = 'https://app.ttswap.abc'
      }
      
      console.log('跳转到:', tradeUrl)
      console.log('shareAddress:', shareAddress)
      
      window.open(tradeUrl, '_blank')
    }
  }
}
</script>

<style scoped>
.vp-button {
  display: inline-block;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.vp-button-brand {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.vp-button-brand:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.4);
  color: white;
  text-decoration: none;
}
</style> 