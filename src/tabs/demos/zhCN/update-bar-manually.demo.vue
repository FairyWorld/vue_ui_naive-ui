<markdown>
# 手动更新指示条

因为 `n-tabs` 直接读取 children 渲染，所以它无法理解你的更新意图，在某些极端情况下，需要你手动的更新条的位置。
</markdown>

<script lang="ts" setup>
import type { TabsInst } from 'naive-ui'
import { nextTick, ref } from 'vue'

const tabsInstRef = ref<TabsInst | null>(null)
const tabsRef = ref(['a', 'b'])
const valueRef = ref('a')

function handleClick() {
  tabsRef.value.reverse()
  valueRef.value = 'a'
  nextTick(() => tabsInstRef.value?.syncBarPosition())
}

const tabs = tabsRef
const value = valueRef
</script>

<template>
  <n-space vertical>
    <n-button @click="handleClick">
      没有任何意义的改动
    </n-button>
    <n-tabs ref="tabsInstRef" v-model:value="value">
      <n-tab v-for="tab in tabs" :key="tab" :name="tab">
        我是 {{ tab }}
      </n-tab>
    </n-tabs>
  </n-space>
</template>
