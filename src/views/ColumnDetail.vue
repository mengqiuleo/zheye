<!--
 * @Author: Pan Jingyi
 * @Date: 2022-08-30 15:08:14
 * @LastEditTime: 2022-08-30 15:53:05
-->
<template>
  <div class="column-detail-page w-75 mx-auto">
    <div
      class="column-info row mb-4 border-bottom pb-4 align-items-center"
      v-if="column"
    >
      <div class="col-3 text-center">
        <img
          :src="column.avatar"
          :alt="column.title"
          class="rounded-circle border w-100"
        />
      </div>
      <div class="col-9">
        <h4>{{ column.title }}</h4>
        <p class="text-muted">{{ column.description }}</p>
      </div>
    </div>
    <post-list :list="list"></post-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { testData, testPosts } from '@/testData'
import PostList from '@/components/PostList.vue'

export default defineComponent({
  components: {
    PostList
  },
  setup() {
    const route = useRoute()
    const currentId = +route.params.id
    const column = testData.find((c) => c.id === currentId)
    const list = testPosts.filter((post) => post.columnId === currentId)
    return {
      column,
      list
    }
  }
})
</script>
<style lang="css" scoped></style>
