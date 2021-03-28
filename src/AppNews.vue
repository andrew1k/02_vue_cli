<template>
    <div class="card">
      <h3>{{id}}. {{title}}</h3>
      <button class="btn" @click="isOpen = !isOpen">Open</button>
      <p v-if="isOpen">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore fuga nostrum explicabo, nulla fugiat inventore. Debitis provident, eius a perferendis doloremque nisi sequi incidunt cum illo eligendi facilis rem iusto.
      </p>
    </div>
</template>

<script>
export default {
  // props: ['title'],
  props: {
    title: {
      type: String,
      required: false,
      default: 'Lorem'
    },
    id: Number,
    isOpen: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      item: 'Item string'
      // isOpen: false
    }
  }
}
</script>
