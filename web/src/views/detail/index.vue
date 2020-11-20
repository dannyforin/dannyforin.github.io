<template>
  <div class="detail">
    <p>数据页面</p>
    <div v-for="(item, index) in list" :key="index">{{ item.name }} + {{ item.id }}</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    console.log(this.$route)
    let id = this.$route.params.id
    axios.get(`https://f66.ph/api/v1/companyJobDetail?company_job_id=${id}`).then(x => {
      console.log(x)
      this.list = x.data.company_job
    })
  }
}
</script>

<style lang="scss" scoped></style>
