<markdown>
# Checkbox group
</markdown>

<script lang="ts" setup>
import { ref } from 'vue'

const cities = ref(null)
</script>

<template>
  <n-checkbox-group v-model:value="cities">
    <n-space item-style="display: flex;">
      <n-checkbox value="Beijing" label="Beijing" />
      <n-checkbox value="Shanghai" label="Shanghai" />
      <n-checkbox value="Guangzhou" label="Guangzhou" />
      <n-checkbox value="Shenzhen" label="Shenzhen" />
    </n-space>
  </n-checkbox-group>
</template>
