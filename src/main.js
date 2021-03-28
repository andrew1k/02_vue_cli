/* eslint-disable no-unused-vars */
import { createApp } from 'vue'
import App from './App.vue'
import TheHeader from './Header'
import './theme.css'

const app = createApp(App)

// global registration
app.component('the-header', TheHeader)

app.mount('#app')
