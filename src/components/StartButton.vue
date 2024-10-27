<script setup lang="ts">
  const emit = defineEmits<{ (e: 'start'): void }>()

  function onClick() {
    emit('start')
  }
</script>

<template>
  <button
    class="m-4 rounded-md bg-rose-300 p-4 font-display text-6xl"
    @click="onClick()"
  >
    Start!
  </button>
</template>
