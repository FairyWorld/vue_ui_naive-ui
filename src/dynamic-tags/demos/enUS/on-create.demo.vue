<markdown>
# Custom tag creation

Use `on-create` to custom tags.
</markdown>

<script lang="ts" setup>
function handleCreate(label: string) {
  return (
    {
      0: '赋能',
      1: '打通',
      2: '闭环'
    }[Math.floor(Math.random() * 3)] + label
  )
}
</script>

<template>
  <n-dynamic-tags @create="handleCreate" />
</template>
