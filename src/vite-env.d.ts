/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/*
 * @Author: Pan Jingyi
 * @Date: 2022-08-23 01:20:41
 * @LastEditTime: 2022-08-23 19:01:18
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
