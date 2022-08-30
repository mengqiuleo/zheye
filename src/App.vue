<!--
 * @Author: Pan Jingyi
 * @Date: 2022-08-23 01:20:41
 * @LastEditTime: 2022-08-30 15:06:01
-->
<template>
  <div class="container">
    <GlobalHeader :user="currentUser" />
    <router-view></router-view>
    <myFooter></myFooter>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'
import myFooter from '@/components/footer.vue'

const currentUser: UserProps = {
  isLogin: false,
  name: 'pjy'
}

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    myFooter
  },
  setup() {
    return {
      currentUser
    }
  }
})
</script>
<style lang="" scoped></style>
