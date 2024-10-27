<script setup lang="ts">
  import FirstPage from './pages/FirstPage.vue'
  import SecondPage from './pages/SecondPage.vue'
  import { ref } from 'vue'
  import StartButton from './components/StartButton.vue'

  const started = ref(false)
</script>

<template>
  <div
    class="relative min-h-screen w-screen"
    :class="!started ? 'overflow-y-hidden' : ''"
  >
    <div
      v-if="!started"
      class="absolute left-0 top-0 z-40 flex h-screen w-screen items-center justify-center bg-rose-200"
    >
      <StartButton @start="started = true"></StartButton>
    </div>
    <div
      v-else
      class="main-container"
    >
      <FirstPage></FirstPage>
      <SecondPage></SecondPage>
    </div>
  </div>
</template>
