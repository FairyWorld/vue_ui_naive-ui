<markdown>
# 基础用法
</markdown>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('Drive My Car')
const options = [
  {
    label: 'Drive My Car',
    value: 'Drive My Car'
  },
  {
    label: 'Norwegian Wood',
    value: 'Norwegian Wood'
  },
  {
    label: 'You Won\'t See',
    value: 'You Won\'t See',
    disabled: true
  },
  {
    label: 'Nowhere Man',
    value: 'Nowhere Man'
  },
  {
    label: 'Think For Yourself',
    value: 'Think For Yourself'
  },
  {
    label: 'The Word',
    value: 'The Word'
  },
  {
    label: 'Michelle',
    value: 'Michelle',
    disabled: true
  },
  {
    label: 'What goes on',
    value: 'What goes on'
  },
  {
    label: 'Girl',
    value: 'Girl'
  },
  {
    label: 'I\'m looking through you',
    value: 'I\'m looking through you'
  },
  {
    label: 'In My Life',
    value: 'In My Life'
  },
  {
    label: 'Wait',
    value: 'Wait'
  }
]
</script>

<template>
  <n-popselect v-model:value="value" :options="options" trigger="click">
    <n-button>{{ value || '弹出选择' }}</n-button>
  </n-popselect>
</template>
