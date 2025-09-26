<template>
  <a 
    :href="defaultUrl" 
    class="action-button"
    @click.prevent="handleClick"
  >
    {{ text }}
  </a>
</template>

<script>
export default {
  name: 'CustomNavButton',
  props: {
    text: {
      type: String,
      required: true
    },
    defaultUrl: {
      type: String,
      default: 'https://app.ttswap.io'
    }
  },
  methods: {
    handleClick() {
      const cookies = document.cookie.split(';');
      let shareaddress = '0xafadafaf';
      for (let cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === 'shareAddress') {
          shareaddress = decodeURIComponent(value);
          break;
        }
      }
      
      const targetUrl = shareaddress 
        ? `https://app.ttswap.io/hoodiTestnet/ttswap/goods?${shareaddress}`
        : this.defaultUrl;
      
      window.open(targetUrl, '_blank');
    }
  }
}
</script>

<style scoped>
.action-button {
  display: inline-block;
  font-size: 1.2rem;
  color: #fff;
  background-color: #3eaf7c;
  padding: 0.8rem 1.6rem;
  border-radius: 4px;
  transition: background-color 0.1s ease;
  box-sizing: border-box;
  border: 1px solid #3eaf7c;
  cursor: pointer;
  text-decoration: none;
}

.action-button:hover {
  background-color: #4abf8a;
}
</style> 