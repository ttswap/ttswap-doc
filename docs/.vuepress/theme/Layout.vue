<template>
  <div class="theme-container">
    <slot name="navbar">
      <Navbar>
        <template #right>
          <div class="right-items">
            <TelegramIcon />
            <slot name="navbar-right" />
          </div>
        </template>
      </Navbar>
    </slot>
    <slot name="sidebar">
      <Sidebar />
    </slot>
    <slot name="page" />
  </div>
</template>

<script setup lang="ts">
import Navbar from 'vuepress-theme-plume/lib/client/components/Navbar.vue'
import Sidebar from 'vuepress-theme-plume/lib/client/components/Sidebar.vue'
import TelegramIcon from '../components/TelegramIcon.vue'
</script>

<style scoped>
.right-items {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style> 