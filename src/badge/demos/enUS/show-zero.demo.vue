<markdown>
# Show zero

Set `show-zero` prop to display zero.
</markdown>

<script lang="ts" setup>
import { MdAdd, MdRemove } from '@vicons/ionicons4'
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <n-space :size="24" align="center">
    <n-badge :value="value">
      <n-avatar />
    </n-badge>
    <n-badge :value="value" show-zero>
      <n-avatar />
    </n-badge>
    <n-button-group>
      <n-button @click="value = Math.min(16, value + 1)">
        <template #icon>
          <n-icon><MdAdd /></n-icon>
        </template>
      </n-button>
      <n-button @click="value = Math.max(0, value - 1)">
        <template #icon>
          <n-icon><MdRemove /></n-icon>
        </template>
      </n-button>
    </n-button-group>
  </n-space>
</template>
