// Import sound files
import clickSound from '@/assets/music/click.mp3'

// Sound utility for UI interactions
class SoundManager {
  private sounds: { [key: string]: HTMLAudioElement } = {}

  constructor() {
    // Preload sounds
    this.loadSound('click', clickSound)
  }

  private loadSound(name: string, path: string) {
    const audio = new Audio(path)
    audio.volume = 0.5 // 50% volume by default
    this.sounds[name] = audio
  }

  play(name: string) {
    const sound = this.sounds[name]
    if (sound) {
      sound.currentTime = 0 // Reset to start
      sound.play().catch(e => console.warn('Sound play failed:', e))
    }
  }

  setVolume(name: string, volume: number) {
    const sound = this.sounds[name]
    if (sound) {
      sound.volume = Math.max(0, Math.min(1, volume)) // Clamp between 0 and 1
    }
  }
}

export const soundManager = new SoundManager() 