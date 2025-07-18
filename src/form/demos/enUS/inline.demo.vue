<markdown>
# Inline form

An example of an inline form.
</markdown>

<script lang="ts" setup>
import type { FormInst } from 'naive-ui'
import { useMessage } from 'naive-ui'
import { ref } from 'vue'

const formRef = ref<FormInst | null>(null)
const message = useMessage()
const size = ref<'small' | 'medium' | 'large'>('medium')
const formValue = ref({
  user: {
    name: '',
    age: ''
  },
  phone: ''
})

const rules = {
  user: {
    name: {
      required: true,
      message: 'Please input your name',
      trigger: 'blur'
    },
    age: {
      required: true,
      message: 'Please input your age',
      trigger: ['input', 'blur']
    }
  },
  phone: {
    required: true,
    message: 'Please input your number',
    trigger: ['input']
  }
}

function handleValidateClick(e: MouseEvent) {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      message.success('Valid')
    }
    else {
      console.log(errors)
      message.error('Invalid')
    }
  })
}
</script>

<template>
  <n-radio-group
    v-model:value="size"
    name="left-size"
    style="margin-bottom: 12px"
  >
    <n-radio-button value="small">
      Small
    </n-radio-button>
    <n-radio-button value="medium">
      Medium
    </n-radio-button>
    <n-radio-button value="large">
      Large
    </n-radio-button>
  </n-radio-group>
  <n-form
    ref="formRef"
    inline
    :label-width="80"
    :model="formValue"
    :rules="rules"
    :size="size"
  >
    <n-form-item label="Name" path="user.name">
      <n-input v-model:value="formValue.user.name" placeholder="Input Name" />
    </n-form-item>
    <n-form-item label="Age" path="user.age">
      <n-input v-model:value="formValue.user.age" placeholder="Input Age" />
    </n-form-item>
    <n-form-item label="Phone" path="phone">
      <n-input v-model:value="formValue.phone" placeholder="Phone Number" />
    </n-form-item>
    <n-form-item>
      <n-button @click="handleValidateClick">
        Validate
      </n-button>
    </n-form-item>
  </n-form>

  <pre>{{ JSON.stringify(formValue, null, 2) }}
</pre>
</template>
