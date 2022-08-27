<!--
 * @Author: Pan Jingyi
 * @Date: 2022-08-23 01:20:41
 * @LastEditTime: 2022-08-27 21:13:10
-->
<template>
  <div class="container">
    <GlobalHeader :user="currentUser" />
    <!-- <ColumnList :list="list" /> -->
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
import 'bootstrap/dist/css/bootstrap.min.css'
// import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'
import ValidateInput, { RulesProp } from './components/ValidateInput.vue'
import ValidateForm from './components/ValidateForm.vue'
// import imgLink from '@/assets/1.jpg'

const currentUser: UserProps = {
  isLogin: true,
  name: 'pjy'
}

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
  name: 'App',
  components: {
    // ColumnList,
    GlobalHeader,
    ValidateInput,
    ValidateForm
  },
  setup() {
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
      console.log(result)
    }
    return {
      // list: testData,
      currentUser,
      emailRules,
      emailVal,
      passwordVal,
      passedRules,
      onFormSubmit
    }
  }
})
</script>
<style lang="" scoped></style>
