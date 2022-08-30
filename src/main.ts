/*
 * @Author: Pan Jingyi
 * @Date: 2022-08-23 01:20:41
 * @LastEditTime: 2022-08-30 16:00:06
 */
import { createApp } from 'vue'
import router from './router/router'
import store from './store/store'
import App from './App.vue'

createApp(App).use(router).use(store).mount('#app')
