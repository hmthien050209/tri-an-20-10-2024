<script setup lang="ts">
  import { inView, animate } from 'motion'
  import { onMounted } from 'vue'
  import tailwindColors from 'tailwindcss/colors'

  onMounted(() => {
    inView('#page2_trigger', () => {
      animate(
        '#page2',
        {
          background: [tailwindColors.rose[200], tailwindColors.orange[100]],
        },
        { delay: 0.5, duration: 0.4 },
      )
    })
  })
</script>

<template>
  <div
    id="page2"
    class="page relative bg-rose-200"
  >
    <!-- Animation trigger element -->
    <div
      id="page2_trigger"
      class="invisible absolute left-10 top-10 h-0 w-0"
    ></div>

    <!-- Page content -->
  </div>
</template>
