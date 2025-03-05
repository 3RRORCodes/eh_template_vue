<template>
  <div v-show="isVisible" class="player-info">
    <div class="header">
      <h2>Player Information</h2>
      <button @click="closeUI" class="close-btn">×</button>
    </div>
    
    <div class="info-content">
      <div class="info-item">
        <span>Name:</span>
        <span>{{ playerData.playerName }}</span>
      </div>
      <div class="info-item">
        <span>ID:</span>
        <span>{{ playerData.playerId }}</span>
      </div>
      <div class="info-item">
        <span>Health:</span>
        <div class="health-bar">
          <div :style="{ width: `${(playerData.health - 100) }%` }" class="health-fill"></div>
        </div>
      </div>
    </div>

    <button @click="sendGameNotification" class="action-btn">
      Send Game Notification
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { sendNuiMessage, nuiCallback, onNuiEvent } from '@/utils/nui'
import { useNotificationStore } from '@/stores/notification'

const notification = useNotificationStore()
const isVisible = ref(false)
const playerData = ref({
  playerName: '',
  playerId: 0,
  health: 100
})

// Handle UI visibility
onNuiEvent<{ show: boolean }>('toggleUI', (data) => {
  isVisible.value = data.show
})

// Handle player data updates
onNuiEvent<{ playerName: string, playerId: number, health: number }>('updateData', (data) => {
  playerData.value = data
})

// Close UI
const closeUI = () => {
  nuiCallback('closeUI')
  isVisible.value = false
}

// Example action
const sendGameNotification = () => {
  nuiCallback('doAction', {
    type: 'notification',
    message: 'Hello from UI!'
  })
  notification.notify('Notification sent to game!', 'success')
}

// Keyboard handler for ESC key
onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isVisible.value) {
      closeUI()
    }
  })
})
</script>

<style lang="scss" scoped>
.player-info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--bg-primary);
  border-radius: 8px;
  padding: 20px;
  min-width: 300px;
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    
    h2 {
      color: var(--text-primary);
      font-size: 1.5rem;
    }
    
    .close-btn {
      background: none;
      border: none;
      color: var(--text-secondary);
      font-size: 1.5rem;
      cursor: pointer;
      padding: 5px;
      
      &:hover {
        color: var(--text-primary);
      }
    }
  }
  
  .info-content {
    margin-bottom: 20px;
    
    .info-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      color: var(--text-primary);
      
      .health-bar {
        width: 150px;
        height: 10px;
        background: rgba(255,255,255,0.1);
        border-radius: 5px;
        overflow: hidden;
        
        .health-fill {
          height: 100%;
          background: var(--success);
          transition: width 0.3s ease;
        }
      }
    }
  }
  
  .action-btn {
    width: 100%;
    padding: 10px;
    background: var(--primary);
    border: none;
    border-radius: 4px;
    color: var(--text-primary);
    font-weight: 500;
    cursor: pointer;
    transition: opacity 0.2s;
    
    &:hover {
      opacity: 0.9;
    }
  }
}
</style> 