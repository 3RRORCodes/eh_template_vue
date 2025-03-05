<template>
  <Transition name="fade">
    <div v-if="notification.show" :class="['notification', notification.type]">
      {{ notification.message }}
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useNotificationStore } from '@/stores/notification'
const notification = useNotificationStore()
</script>

<style lang="scss" scoped>
.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 12px 24px;
  border-radius: 8px;
  color: var(--text-primary);
  font-weight: 500;
  z-index: 1000;
  
  &.success { background: var(--success); }
  &.error { background: var(--danger); }
  &.info { background: var(--info); }
  &.warning { background: var(--warning); }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> 