<markdown>
# 使用输入预设

默认状况下，`n-dynamic-input` 的预设是 `input`。
</markdown>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(['', '', ''])
</script>

<template>
  <n-dynamic-input
    v-model:value="value"
    placeholder="请输入"
    :min="3"
    :max="6"
  />
  <pre>{{ JSON.stringify(value, null, 2) }}</pre>
</template>
