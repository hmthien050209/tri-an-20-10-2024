<script setup lang="ts">
  import { inView, timeline, TimelineDefinition } from 'motion'
  import { onMounted } from 'vue'
  import tailwindColors from 'tailwindcss/colors'
  import heart from '../assets/heart-solid.svg?raw'

  const pageTimeline: TimelineDefinition = [
    [
      '#page2',
      {
        background: [tailwindColors.rose[200], tailwindColors.orange[100]],
      },
      { delay: 0.5, duration: 0.4 },
    ],
    [
      '.heart#_4 path',
      {
        visibility: ['hidden', 'visible'],
        fill: [tailwindColors.transparent, tailwindColors.rose[700]],
      },
      { duration: 0.5 },
    ],
    ['.heart#_4', { rotate: [0, 15] }, { duration: 0.5, at: '<' }],
    [
      '.texts h3',
      { opacity: [0, 100], y: [-100, -25, -40, -15, -20, 0] },
      { duration: 0.5, at: '+0.2' },
    ],
    [
      '.texts p',
      { opacity: [0, 100], y: [-100, -25, -40, -15, -20, 0] },
      { duration: 0.5, at: '+0.2' },
    ],
  ]

  onMounted(() => {
    inView('#page2_trigger', () => {
      timeline(pageTimeline)
    })
  })
</script>

<template>
  <div
    id="page2"
    class="page relative flex flex-row bg-rose-200"
  >
    <!-- Animation trigger element -->
    <div
      id="page2_trigger"
      class="invisible absolute left-10 top-10 h-0 w-0"
    ></div>

    <!-- Page content -->
    <div class="flex h-full w-3/5 p-14">
      <div class="texts flex h-full flex-col font-serif">
        <h3>Chào các bạn nữ lớp 10 Tin-LN thân mến!</h3>
        <p>
          Lớp chúng mình tổ chức mừng ngày 20/10 hơi muộn nhỉ? Tụi con trai
          chúng mình cảm ơn hai bạn Hà và Diệp đã luôn luôn trách nhiệm, luôn
          luôn hết mình vì lớp mình.
          <br />
          Chúc các bạn ngày càng xinh đẹp hơn, luôn vui vẻ và hạnh phúc bên gia
          đình cũng như tại lớp 10 Tin-LN này. Chúc các bạn luôn cố gắng học tập
          thật tốt và ngày càng thành công trong cuộc sống.
          <br />
          Và sau đây chính là món quà mà chúng mình muốn dành tặng cho hai bạn,
          mong rằng các bạn sẽ thích nó!
        </p>
      </div>
    </div>
    <div class="flex h-full w-2/5 items-center justify-center">
      <svg
        id="_4"
        class="heart"
        v-html="heart"
      ></svg>
    </div>
  </div>
</template>

<style>
  .heart#_4 {
    @apply h-[32rem] w-[32rem];
  }
</style>
