import { createApp } from 'vue'
import router from './router/index'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import './style.css'
import 'scss-flex'
import App from './App.vue'
import '@/utils/log'
const app = createApp(App)
for(const [key,component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key,component)
}
app.use(router).use(hljsVuePlugin).mount('#app')
