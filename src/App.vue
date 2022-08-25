<!--
 * @Author: Pan Jingyi
 * @Date: 2022-08-23 01:20:41
 * @LastEditTime: 2022-08-23 22:08:07
-->
<template>
  <div class="container">
    <ColumnList :list="list" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'

const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是test1专栏',
    avatar: 'https://picsum.photos/id/858/200/200'
  },
  {
    id: 2,
    title: 'test1的专栏',
    description: '这是test1专栏',
    avatar: 'https://picsum.photos/id/858/200/200'
  },
  {
    id: 2,
    title: 'test1的专栏',
    description: '这是test1专栏',
    avatar: 'https://picsum.photos/id/858/200/200'
  },
  {
    id: 3,
    title: 'test1的专栏',
    description: '这是test1专栏',
    avatar: 'https://picsum.photos/id/858/200/200'
  },
  {
    id: 4,
    title: 'test1的专栏',
    description: '这是test1专栏',
    avatar: 'https://picsum.photos/id/858/200/200'
  },
  {
    id: 5,
    title: 'test1的专栏',
    description: '这是test1专栏',
    avatar: 'https://picsum.photos/id/858/200/200'
  }
]

export default defineComponent({
  name: 'App',
  components: {
    ColumnList
  },
  setup() {
    return {
      list: testData
    }
  }
})
</script>
<style lang="" scoped></style>
