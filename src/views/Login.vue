<!--
 * @Author: Pan Jingyi
 * @Date: 2022-08-30 14:25:22
 * @LastEditTime: 2022-08-30 15:19:38
-->
<template>
  <div class="login-page">
    <ValidateForm @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <ValidateInput
          :rules="emailRules"
          v-model="emailVal"
          placeholder="请输入邮箱地址"
          type="text"
        ></ValidateInput>
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <ValidateInput
          :rules="passedRules"
          v-model="passwordVal"
          placeholder="请输入密码"
          type="password"
        ></ValidateInput>
      </div>
      <template #submit>
        <span class="btn btn-danger"> Submit </span>
      </template>
    </ValidateForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'
import ValidateForm from '../components/ValidateForm.vue'

export default defineComponent({
  name: 'App',
  components: {
    ValidateInput,
    ValidateForm
  },
  setup() {
    const router = useRouter()

    const emailVal = ref('123@')
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱地址不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' }
    ]
    const passwordVal = ref('pjy')
    const passedRules: RulesProp = [
      { type: 'required', message: '密码不能为空' }
    ]
    const onFormSubmit = (result: boolean) => {
      console.log('登录：', result)
      if (result) {
        router.push({ name: 'column', params: { id: 1 } })
      }
    }

    return {
      emailVal,
      emailRules,
      passwordVal,
      passedRules,
      onFormSubmit
    }
  }
})
</script>
<style lang="" scoped></style>
