<markdown>
# Icon
</markdown>

<script lang="ts" setup>
import {
  ChevronBackCircle,
  ChevronBackCircleOutline,
  ChevronForwardCircle,
  ChevronForwardCircleOutline,
  RocketOutline,
  TrendingUpSharp
} from '@vicons/ionicons5'
</script>

<template>
  <n-space vertical>
    <n-date-picker type="date">
      <template #date-icon>
        <n-icon :size="16" :component="RocketOutline" />
      </template>
      <template #prev-year>
        <n-icon :size="16" :component="ChevronBackCircle" />
      </template>
      <template #prev-month>
        <n-icon :size="16" :component="ChevronBackCircleOutline" />
      </template>
      <template #next-month>
        <n-icon :size="16" :component="ChevronForwardCircleOutline" />
      </template>
      <template #next-year>
        <n-icon :size="16" :component="ChevronForwardCircle" />
      </template>
    </n-date-picker>
    <n-date-picker type="daterange">
      <template #separator>
        <n-icon :size="16" :component="TrendingUpSharp" />
      </template>
      <template #date-icon>
        <n-icon :size="16" :component="RocketOutline" />
      </template>
    </n-date-picker>
  </n-space>
</template>
