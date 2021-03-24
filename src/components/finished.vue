<template>
  <el-table :data="finished" style="width: 100%" border>
      <el-table-column prop="id_pages" label="报修单ID" width="120"></el-table-column>
      <el-table-column prop="name_maintainer" label="维修师傅" width="80"></el-table-column>
      <el-table-column prop="phone_maintainer" label="维修师傅电话" width="120"></el-table-column>
      <el-table-column prop="name_repairer" label="报修者" width="80"></el-table-column>
      <el-table-column prop="phone_repairer" label="报修者电话" width="120"></el-table-column>
      <el-table-column prop="addr_pages" label="报修地点" width="100"></el-table-column>
      <el-table-column prop="detail_pages" label="报修详情" width="120"></el-table-column>
      <el-table-column prop="now_pages" label="报修时间"></el-table-column>
      <el-table-column prop="add_maintainer" label="接单时间"></el-table-column>
      <el-table-column prop="finish_maintainer" label="完成时间"></el-table-column>
  </el-table>
</template>
<script>
export default {
  name: 'finished',
  data () {
    return {
      finished: []
    }
  },
  mounted () {
    this.getfinished()
  },
  methods: {
    getfinished () {
      this.$axios({
        methods: 'get',
        url: 'ad_repaired.php'
      }).then(res => {
        console.log(res.data)
        this.finished = res.data
      })
    }
  }
}
</script>
<style scoped>

</style>
