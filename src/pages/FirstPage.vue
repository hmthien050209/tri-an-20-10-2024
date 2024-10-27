<script setup lang="ts">
  import { timeline, TimelineDefinition } from 'motion'
  import heart from '../assets/heart-solid.svg?raw'
  import { onMounted } from 'vue'
  import { drawSvgPath } from '../utils/drawSvgPath'
  import tailwindColors from 'tailwindcss/colors'

  const pageTimeline: TimelineDefinition = [
    ['.heart#_1 path', drawSvgPath(1), { duration: 0.6, delay: 0.5 }],
    ['.heart#_2 path', drawSvgPath(1), { duration: 0.6 }],
    ['.heart#_3 path', drawSvgPath(1), { duration: 0.6 }],
    [
      '.heart#_3 path',
      { fill: [tailwindColors.transparent, tailwindColors.rose[500]] },
      { duration: 0.3 },
    ],
    [
      '.heart#_2 path',
      { fill: [tailwindColors.transparent, tailwindColors.rose[700]] },
      { duration: 0.3 },
    ],
    [
      '.heart#_1 path',
      { fill: [tailwindColors.transparent, tailwindColors.rose[500]] },
      { duration: 0.3 },
    ],
    ['#title', { opacity: [0, 100] }, { duration: 0.4 }],
  ]

  onMounted(() => {
    // Full screen request
    const root = document.documentElement,
      req = root.requestFullscreen
    if (typeof req !== 'undefined' && req) {
      req.call(root)
    }

    timeline(pageTimeline)
  })
</script>

<template>
  <div
    id="page1"
    class="page flex items-center justify-center bg-rose-200"
  >
    <div class="container">
      <div class="hearts-container">
        <svg
          id="_1"
          class="heart"
          v-html="heart"
        ></svg>
        <svg
          id="_2"
          class="heart"
          v-html="heart"
        ></svg>
        <svg
          id="_3"
          class="heart"
          v-html="heart"
        ></svg>
      </div>
      <h4 id="title">
        Chúc mừng ngày phụ nữ Việt Nam
        <br />
        20/10
      </h4>
    </div>
  </div>
</template>

<style>
  .container {
    @apply relative flex h-[64rem] w-[64rem] items-center justify-center overflow-visible;
  }

  .hearts-container {
    @apply absolute left-0 top-0 flex h-[64rem] w-[64rem] items-center justify-center overflow-visible;
  }

  .heart#_1 {
    @apply h-[64rem] w-[64rem];
  }

  .heart#_2 {
    @apply h-[36rem] w-[36rem];
  }

  .heart#_3 {
    @apply h-[18rem] w-[18rem];
  }

  .heart#_1 path {
    @apply stroke-rose-500;
  }

  .heart#_2 path {
    @apply stroke-rose-700;
  }

  .heart#_3 path {
    @apply stroke-rose-500;
  }

  #title {
    @apply z-10 m-8 rounded-md bg-rose-200 p-8 text-center font-display text-rose-700;
  }
</style>
