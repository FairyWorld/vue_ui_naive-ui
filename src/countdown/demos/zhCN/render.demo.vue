<markdown>
# 自定义倒计时

你们的产品经理可能想玩很多花样，所以就安排一下。
</markdown>

<script lang="ts" setup>
import type { CountdownProps } from 'naive-ui'
import { ref } from 'vue'

const renderCountdown: CountdownProps['render'] = ({
  hours,
  minutes,
  seconds
}) => {
  return `烫烫烫${String(hours).padStart(2, '0')}锟斤拷${String(
    minutes
  ).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

const active = ref(false)
</script>

<template>
  <n-space item-style="display: flex; align-items: center;">
    <n-statistic label="大哥你玩技术，玩它有啥用啊" tabular-nums>
      <n-countdown
        :render="renderCountdown"
        :duration="996 * 1000"
        :active="active"
      />
    </n-statistic>
    <n-switch v-model:value="active" />
  </n-space>
</template>
