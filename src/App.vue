<!--
 * @Author: Pan Jingyi
 * @Date: 2022-08-23 01:20:41
 * @LastEditTime: 2022-08-26 13:44:52
-->
<template>
  <div class="container">
    <GlobalHeader :user="currentUser" />
    <ColumnList :list="list" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'
import imgLink from '@/assets/1.jpg'

const currentUser: UserProps = {
  isLogin: true,
  name: 'pjy'
}

const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是test1专栏',
    avatar: imgLink
  },
  {
    id: 2,
    title: 'test1的专栏',
    description: '这是test1专栏'
    // avatar: 'https://picsum.photos/id/858/200/200'
  },
  {
    id: 2,
    title: 'test1的专栏',
    description: '这是test1专栏',
    avatar: imgLink
  },
  {
    id: 3,
    title: 'test1的专栏',
    description: '这是test1专栏',
    avatar: imgLink
  },
  {
    id: 4,
    title: 'test1的专栏',
    description: '这是test1专栏',
    avatar: imgLink
  },
  {
    id: 5,
    title: 'test1的专栏',
    description: '这是test1专栏',
    avatar: imgLink
  }
]

export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader
  },
  setup() {
    return {
      list: testData,
      currentUser
    }
  }
})
</script>
<style lang="" scoped></style>
