<markdown>
# Customize Icons

You can customize filter & filter menu & sorter & expand icon.
</markdown>

<script lang="ts" setup>
import type { DataTableBaseColumn, DataTableColumns } from 'naive-ui'
import { PawOutline, SearchOutline } from '@vicons/ionicons5'
import { NButton, NIcon, NSpace } from 'naive-ui'
import { h, reactive } from 'vue'

const data = [
  {
    Left: '1',
    Right: '1',
    key: 1
  },
  {
    Left: '2',
    Right: '2',
    key: 2
  }
]

function renderExpandIcon() {
  return h(NIcon, null, { default: () => h(PawOutline) })
}

const filterColumn = reactive<DataTableBaseColumn>({
  title: 'Right',
  key: 'Right',
  filter: 'default',
  filterOptionValue: null,
  renderFilterIcon: () => {
    return h(NIcon, null, { default: () => h(SearchOutline) })
  },
  renderFilterMenu: ({ hide }) => {
    return h(
      NSpace,
      { style: { padding: '12px' }, vertical: true },
      {
        default: () => [
          h(
            NButton,
            {
              onClick: () => {
                filterColumn.filterOptionValue = '1'
              }
            },
            { default: () => 'Filter by 1' }
          ),
          h(
            NButton,
            {
              onClick: () => {
                filterColumn.filterOptionValue = '2'
              }
            },
            { default: () => 'Filter by 2' }
          ),
          h(
            NButton,
            {
              onClick: () => {
                filterColumn.filterOptionValue = null
                hide()
              }
            },
            { default: () => 'clear' }
          )
        ]
      }
    )
  }
})

const cols = reactive<DataTableColumns>([
  {
    type: 'expand',
    renderExpand: () => {
      return 'Expand content'
    }
  },
  {
    title: 'Left',
    key: 'Left',
    sorter: 'default',
    renderSorterIcon: ({ order }) => {
      const style = 'transform: translateY(-3px);'
      if (order === false)
        return h('div', { style }, ['🤔'])
      if (order === 'ascend')
        return h('div', { style }, ['👇'])
      if (order === 'descend')
        return h('div', { style }, ['👆'])
    }
  },
  filterColumn
])
</script>

<template>
  <n-data-table
    :columns="cols"
    :data="data"
    :render-expand-icon="renderExpandIcon"
  />
</template>
