export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  // Wait for Vue to be ready
  Vue.mixin({
    mounted() {
      // Add click handler to the navigation button
      this.$nextTick(() => {
        const navButton = document.querySelector('a[href="https://app.ttswap.io"]');
        if (navButton) {
          navButton.addEventListener('click', (event) => {
            event.preventDefault();
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
              : 'https://app.ttswap.io';
            
            window.open(targetUrl, '_blank');
          });
        }
      });
    }
  });
} 