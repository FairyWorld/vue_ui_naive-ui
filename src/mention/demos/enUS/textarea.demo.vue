<markdown>
# Textarea

The input `type` can be set to `'textarea'`.
</markdown>

<script lang="ts" setup>
const options = [
  {
    label: '07akioni',
    value: '07akioni'
  },
  {
    label: 'star-kirby',
    value: 'star-kirby'
  },
  {
    label: 'Guandong-Road',
    value: 'Guandong-Road'
  },
  {
    label: 'No.5-Yiheyuan-Road',
    value: 'No.5-Yiheyuan-Road'
  }
]
</script>

<template>
  <n-mention type="textarea" :options="options" />
</template>
