/*
 * @Author: Pan Jingyi
 * @Date: 2022-08-23 01:20:41
 * @LastEditTime: 2022-08-25 19:17:12
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' //这个path用到了上面安装的@types/node

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve('./src') // @代替src
    }
  }
})
