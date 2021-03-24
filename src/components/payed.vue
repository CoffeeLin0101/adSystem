<template>
    <div>
    <el-table :data="payed" style="width: 100%" border>
        <el-table-column prop="id_pages" label="报修单ID" width="120"></el-table-column>
        <el-table-column prop="name_maintainer" label="维修师傅" width="120"></el-table-column>
        <el-table-column prop="phone_maintainer" label="维修师傅电话" width="120"></el-table-column>
        <el-table-column prop="name_pages" label="报修者" width="120"></el-table-column>
        <el-table-column prop="phone_pages" label="报修者电话" width="120"></el-table-column>
        <el-table-column prop="addr_pages" label="报修地点" width="120"></el-table-column>
        <el-table-column prop="detail_pages" label="报修详情" width="120"></el-table-column>
        <el-table-column prop="now_pages" label="报修时间" width="180"></el-table-column>
        <el-table-column prop="add_maintainer" label="接单时间"></el-table-column>
    </el-table>
    </div>
</template>
<script>
export default {
  name: 'payed',
  data () {
    return {
      payed: []
    }
  },
  mounted () {
    this.getpayed()
  },
  methods: {
    getpayed () {
      this.$axios({
        methods: 'get',
        url: 'ad_repairing.php'
      }).then(res => {
        console.log(res.data)
        this.payed = res.data
      })
    }
  }
}
</script>
<style scoped>

</style>
