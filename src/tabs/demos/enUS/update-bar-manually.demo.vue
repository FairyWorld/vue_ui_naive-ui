<markdown>
  # Update bar manually

  Since `n-tabs` renders children directly, it can't understand your intention to update active tab. In some edge cases, you need to update bar position manually.
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
      Useless change
    </n-button>
    <n-tabs ref="tabsInstRef" v-model:value="value">
      <n-tab v-for="tab in tabs" :key="tab" :name="tab">
        I'm {{ tab }}
      </n-tab>
    </n-tabs>
  </n-space>
</template>
