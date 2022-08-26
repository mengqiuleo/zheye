<!--
 * @Author: Pan Jingyi
 * @Date: 2022-08-26 14:00:35
 * @LastEditTime: 2022-08-26 14:09:38
-->
<template>
  <li class="dropdown-option" :class="{ 'is-disabled': disabled }">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'DropdownItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    return {}
  }
})
</script>
<style lang="css" scoped>
:slotted(.dropdown-option.is-disabled *) {
  color: #6c757d;
  pointer-events: none;
  background-color: transparent;
}
</style>
