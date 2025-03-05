import { defineStore } from 'pinia'
import { ref } from 'vue'

type NotificationType = 'success' | 'error' | 'info' | 'warning'

export const useNotificationStore = defineStore('notification', () => {
  const show = ref(false)
  const message = ref('')
  const type = ref<NotificationType>('info')
  let timeout: number | null = null

  function notify(newMessage: string, newType: NotificationType = 'info', duration = 3000) {
    if (timeout) clearTimeout(timeout)
    
    message.value = newMessage
    type.value = newType
    show.value = true

    timeout = window.setTimeout(() => {
      show.value = false
    }, duration)
  }

  return {
    show,
    message,
    type,
    notify
  }
}) 