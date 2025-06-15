<template>
  <a
    href="https://t.me/ttswapfinance"
    class="social-link telegram-link"
    target="_blank"
    rel="noopener noreferrer"
    title="Telegram"
  >
    <Icon icon="mdi:telegram" width="24" height="24" />
  </a>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<style scoped>
.telegram-link {
  display: inline-flex;
  align-items: center;
  color: var(--vp-c-text-1);
  transition: color 0.25s;
}

.telegram-link:hover {
  color: #0088cc;
}

.telegram-link .iconify {
  width: 24px;
  height: 24px;
}
</style> 