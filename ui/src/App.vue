<template>
  <div class="app">
    <Notification />
    <PlayerInfo />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import Notification from '@/components/Notification.vue'
import PlayerInfo from '@/components/PlayerInfo.vue'
</script>

<style lang="scss">
.app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  
  .content {
    flex: 1;
    position: relative;
  }
}
</style> 