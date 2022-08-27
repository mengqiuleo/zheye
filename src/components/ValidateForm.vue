<!--
 * @Author: Pan Jingyi
 * @Date: 2022-08-27 20:21:51
 * @LastEditTime: 2022-08-27 21:03:50
-->
<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'

type ValidateFunc = () => boolean
type ClearInputFunc = () => void

export type Events = {
  'form-item-created': ValidateFunc
  'form-item-clear': ClearInputFunc
}

export const emitter = mitt<Events>()

export default defineComponent({
  name: 'ValidateForm',
  emits: ['form-submit'],
  setup(props, context) {
    // 获取mitt
    let funcArr: ValidateFunc[] = []
    let clearFuncArr: ClearInputFunc[] = []

    // 默认按钮点击事件
    const submitForm = () => {
      const result = funcArr.map((func) => func()).every((result) => result)
      context.emit('form-submit', result)
    }

    const callback = (func: ValidateFunc) => {
      console.log('收集')
      funcArr.push(func)
    }
    const clearCallBack = (func: ClearInputFunc) => {
      console.log('亲', func)
      clearFuncArr.push(func)
    }
    // 监听事件
    emitter.on('form-item-created', callback)
    emitter.on('form-item-clear', clearCallBack)
    onUnmounted(() => {
      emitter.off('form-item-created', callback)
      funcArr = []
      emitter.off('form-item-clear', clearCallBack)
      clearFuncArr = []
    })
    return {
      submitForm
    }
  }
})
</script>
<style lang="css" scoped></style>
