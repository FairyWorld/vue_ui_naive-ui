<markdown>
# Size

Choose the size you want.
</markdown>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(null)
const disabled2 = ref(false)
const disabled1 = ref(false)
const songs = [
  {
    value: 'Rock\'n\'Roll Star',
    label: 'Rock\'n\'Roll Star'
  },
  {
    value: 'Shakermaker',
    label: 'Shakermaker'
  },
  {
    value: 'Live Forever',
    label: 'Live Forever'
  },
  {
    value: 'Up in the Sky',
    label: 'Up in the Sky'
  },
  {
    value: '...',
    label: '...'
  }
].map((s) => {
  s.value = s.value.toLowerCase()
  return s
})
</script>

<template>
  <n-space vertical>
    <n-radio-group v-model:value="value" name="radiobuttongroup2" size="medium">
      <n-radio-button
        v-for="song in songs"
        :key="song.value"
        :value="song.value"
        :disabled="
          (song.label === 'Live Forever' && disabled1)
            || (song.label === 'Shakermaker' && disabled2)
        "
      >
        {{ song.label }}
      </n-radio-button>
    </n-radio-group>
    <n-radio-group v-model:value="value" name="radiobuttongroup3" size="large">
      <n-radio-button
        v-for="song in songs"
        :key="song.value"
        :value="song.value"
        :disabled="
          (song.label === 'Live Forever' && disabled1)
            || (song.label === 'Shakermaker' && disabled2)
        "
      >
        {{ song.label }}
      </n-radio-button>
    </n-radio-group>
    <n-space>
      <n-checkbox v-model:checked="disabled2" style="margin-right: 12px">
        Disable Shakemaker
      </n-checkbox>
      <n-checkbox v-model:checked="disabled1">
        Disable Live Forever
      </n-checkbox>
    </n-space>
  </n-space>
</template>
