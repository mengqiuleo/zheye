<!--
 * @Author: Pan Jingyi
 * @Date: 2022-08-30 14:25:47
 * @LastEditTime: 2022-08-30 16:07:49
-->
<template>
  <div class="home-page">
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <img src="../assets/callout.svg" alt="callout" class="w-50" />
          <h2 class="font-weight-light">随心写作，自由表达</h2>
          <p>
            <a href="#" class="btn btn-primary my-2">开始写文章</a>
          </p>
        </div>
      </div>
    </section>
    <h4 class="font-weight-bold text-center">发现精彩</h4>
    <column-list :list="list"></column-list>
    <!-- <button
      class="btn btn-outline-primary mt-2 mb-5 mx-auto btn-block w-25 d-block"
       @click="loadMorePage" v-if="!isLastPage"
    >
      加载更多
    </button> -->
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '@/store/store'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
// import imgLink from '@/assets/1.jpg'

// const testData: ColumnProps[] = [
//   {
//     id: 1,
//     title: 'test1的专栏',
//     description: '这是test1专栏',
//     avatar: imgLink
//   },
//   {
//     id: 2,
//     title: 'test1的专栏',
//     description: '这是test1专栏'
//     // avatar: 'https://picsum.photos/id/858/200/200'
//   },
//   {
//     id: 2,
//     title: 'test1的专栏',
//     description: '这是test1专栏',
//     avatar: imgLink
//   },
//   {
//     id: 3,
//     title: 'test1的专栏',
//     description: '这是test1专栏',
//     avatar: imgLink
//   },
//   {
//     id: 4,
//     title: 'test1的专栏',
//     description: '这是test1专栏',
//     avatar: imgLink
//   },
//   {
//     id: 5,
//     title: 'test1的专栏',
//     description: '这是test1专栏',
//     avatar: imgLink
//   }
// ]

export default defineComponent({
  components: {
    ColumnList
  },
  setup() {
    const store = useStore<GlobalDataProps>()
    const list = computed(() => store.state.columns)
    return {
      list
    }
  }
})
</script>
<style lang="" scoped></style>
