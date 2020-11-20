<template>
  <div>
    <a-button type="primary" class="login-button">首页</a-button>
    <button>hello world</button>
    <button>hello world</button>
    <button>hello world</button>
    <button>hello world</button>
    <br />
    <img :src="url" alt="" width="100" height="100" />
    {{ url }}
    {{ id }}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      url: '',
      id: ''
    }
  },
  created() {
    axios.get('https://unsplash.it/1600/900?random').then(x => {
      console.log(x)
      this.url = x.config.url
      this.id = x.headers
    })
  }
}
</script>

<style lang="scss" scoped>
.login-button {
  width: 100px;
  color: red;
}
</style>
