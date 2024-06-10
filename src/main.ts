import { writable } from 'svelte/store'
import App from './components/App.svelte'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.css'
import type { Character } from './types'

export const character = writable<Character|null>(null);

const app = new App({
    target: document.getElementById('app')
  })

export default app
