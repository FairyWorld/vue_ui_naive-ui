<markdown>
# Closable
</markdown>

<script lang="ts" setup>
import { IosAirplane } from '@vicons/ionicons4'
</script>

<template>
  <n-alert title="Default Text" type="default" closable>
    <template #icon>
      <n-icon>
        <IosAirplane />
      </n-icon>
    </template>
    Gee it's good to be back home
  </n-alert>
  <n-alert title="Info Text" type="info" closable>
    Gee it's good to be back home
  </n-alert>
  <n-alert title="Success Text" type="success" closable>
    Leave it till tomorrow to unpack my case
  </n-alert>
  <n-alert title="Warning Text" type="warning" closable>
    Honey disconnect the phone
  </n-alert>
  <n-alert title="Error Text" type="error" closable>
    I'm back in the U.S.S.R.
  </n-alert>
</template>

<style>
.n-alert:not(:last-child) {
  margin-bottom: 12px;
}
</style>
