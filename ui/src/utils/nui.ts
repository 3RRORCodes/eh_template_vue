interface NuiMessageData<T = unknown> {
  action: string
  data: T
}

export const isEnvBrowser = (): boolean => !(window as any).invokeNative

// Wrapper for messages to game client
export const sendNuiMessage = <T = void>(action: string, data?: T): void => {
  if (isEnvBrowser()) {
    console.log('NUI Message sent:', { action, data })
    return
  }
  fetch(`https://nui-frame-app/${action}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  })
}

// Wrapper for callbacks to game client
export const nuiCallback = <T = void>(action: string, data?: T): void => {
  if (isEnvBrowser()) {
    console.log('NUI Callback sent:', { action, data })
    return
  }
  fetch(`https://nui-frame-app/callback`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      action,
      data,
    }),
  })
}

// Register NUI Event Listener
export const onNuiEvent = <T = unknown>(
  action: string,
  handler: (data: T) => void
): void => {
  window.addEventListener('message', ({ data }: { data: NuiMessageData<T> }) => {
    if (data.action === action) {
      handler(data.data)
    }
  })
} 