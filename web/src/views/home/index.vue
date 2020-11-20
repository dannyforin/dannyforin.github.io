<template>
  <div>
    <a-button type="primary" class="login-button">首页</a-button>
    <br />
    <img :src="url" alt="" width="100" height="100" class="demo" />
    {{ url }}
    {{ id }}
    <br />
    <br />
    <a-button type="primary" @click="handelDetail">跳转detail-1</a-button>
    <a-button type="primary" @click="handelDetail2">跳转detail-2</a-button>
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
  },
  methods: {
    handelDetail() {
      this.$router.push({
        path: '/detail/308'
      })
    },
    handelDetail2() {
      this.$router.push({
        path: '/detail/356'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-button {
  width: 100px;
  color: red;
}
</style>
