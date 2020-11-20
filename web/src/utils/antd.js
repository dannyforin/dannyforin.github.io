import Vue from 'vue'
import 'ant-design-vue/dist/antd.css'

import { Button, Modal, message } from 'ant-design-vue'

Vue.use(Button)
Vue.use(Modal)
Vue.use(message)
Vue.prototype.$message = message
