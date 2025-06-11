module.exports = {
  // ... existing config ...
  plugins: [
    [
      '@vuepress/register-components',
      {
        components: [
          {
            name: 'CustomNavButton',
            path: './.vuepress/components/CustomNavButton.vue'
          }
        ]
      }
    ]
  ]
  // ... rest of config ...
} 