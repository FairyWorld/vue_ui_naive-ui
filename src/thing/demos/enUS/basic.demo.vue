<markdown>
# Basic

Thing provides many slots to custom.
</markdown>

<script lang="ts" setup>
import { CashOutline as CashIcon } from '@vicons/ionicons5'
import { ref } from 'vue'

const avatar = ref(true)
const header = ref(true)
const headerExtra = ref(true)
const description = ref(true)
const footer = ref(true)
const action = ref(true)
</script>

<template>
  <n-row>
    <n-col :span="12">
      <n-checkbox v-model:checked="avatar">
        Avatar
      </n-checkbox>
    </n-col>
    <n-col :span="12">
      <n-checkbox v-model:checked="action">
        Action
      </n-checkbox>
    </n-col>
  </n-row>
  <n-row>
    <n-col :span="12">
      <n-checkbox v-model:checked="header">
        Header
      </n-checkbox>
    </n-col>
    <n-col :span="12">
      <n-checkbox v-model:checked="headerExtra">
        Header Extra
      </n-checkbox>
    </n-col>
  </n-row>
  <n-row>
    <n-col :span="12">
      <n-checkbox v-model:checked="description">
        Description
      </n-checkbox>
    </n-col>
    <n-col :span="12">
      <n-checkbox v-model:checked="footer">
        Footer
      </n-checkbox>
    </n-col>
  </n-row>
  <n-divider />
  <n-thing>
    <template v-if="avatar" #avatar>
      <n-avatar>
        <n-icon>
          <CashIcon />
        </n-icon>
      </n-avatar>
    </template>
    <template v-if="header" #header>
      Money
    </template>
    <template v-if="headerExtra" #header-extra>
      <n-button circle size="small">
        <template #icon>
          <CashIcon />
        </template>
      </n-button>
    </template>
    <template v-if="description" #description>
      Description
    </template>
    Money is any item or verifiable record that is generally accepted as payment
    for goods and services and repayment of debts, such as taxes, in a
    particular country or socio-economic context.
    <template v-if="footer" #footer>
      Footer
    </template>
    <template v-if="action" #action>
      <n-space>
        <n-button size="small">
          <template #icon>
            <n-icon>
              <CashIcon />
            </n-icon>
          </template>
          1$
        </n-button>
        <n-button size="small">
          <template #icon>
            <n-icon>
              <CashIcon />
            </n-icon>
          </template>
          10$
        </n-button>
        <n-button size="small">
          <template #icon>
            <n-icon>
              <CashIcon />
            </n-icon>
          </template>
          100$
        </n-button>
      </n-space>
    </template>
  </n-thing>
</template>
