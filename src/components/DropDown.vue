<!--
 * @Author: Pan Jingyi
 * @Date: 2022-08-26 12:24:00
 * @LastEditTime: 2022-08-26 14:05:15
-->
<template>
  <div class="dropdown" ref="dropdownRef">
    <a
      href="#"
      class="btn btn-outline-light my-2 dropdown-toggle"
      @click.prevent="toggleOpen"
      >{{ title }}</a
    >
    <ul class="dropdown-menu" :style="{ display: 'block' }" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'DropDown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    const isOpen = ref(false)
    const toggleOpen = () => {
      isOpen.value = !isOpen.value
      console.log('切换: ', isOpen)
    }
    return {
      isOpen,
      toggleOpen
    }
  }
})
</script>
<style lang="css" scoped>
/* ul.dropdown-menu {
  display: block;
} */
</style>
