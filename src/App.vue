/* eslint-disable no-unused-vars */
/* eslint-disable no-labels */
<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Actual news {{now}} <span>Opens: {{openRate}}</span></h2>
    </div>
    <app-news 
      v-for="item in news" 
      :key="item.id" 
      :title="item.title" 
      :id="item.id" 
      :is-open="item.isOpen"
      @open-news="openRate++"
      ></app-news>
  </div>
</template>

<script>

import AppNews from './AppNews'

export default {
  data () {
    return {
      now: new Date().toLocaleDateString(),
      openRate: 0,
      news: [
        {
          title: 'First news',
          id: 1,
          isOpen: false
        },
        {
          title: 'Seconds news',
          id: 2,
          isOpen: false
        },
        {
          id: 3
        }
      ]
    }
  },
  components: {
    // 'app-news': AppNews
    // AppNews: AppNews
    AppNews
  }
}
</script>
