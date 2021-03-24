<template>
    <div>
    <el-table :data="paying" style="width: 100%" border>
          <el-table-column prop="id_pages" label="报修单ID" width="120"></el-table-column>
          <el-table-column prop="no_pages" label="报修者学号" width="120"></el-table-column>
          <el-table-column prop="name_pages" label="报修者姓名" width="120"></el-table-column>
          <el-table-column prop="no_pages" label="报修者学号" width="120"></el-table-column>
          <el-table-column prop="addr_pages" label="报修地点" width="120"></el-table-column>
          <el-table-column prop="detail_pages" label="报修详情" width="120"></el-table-column>
          <el-table-column prop="phone_pages" label="报修者电话" width="120"></el-table-column>
          <el-table-column prop="now_pages" label="报修时间"></el-table-column>
    </el-table>
    </div>
</template>
<script>
export default {
  name: 'paying',
  data () {
    return {
      paying: []
    }
  },
  mounted () {
    this.getpaying()
  },
  methods: {
    getpaying () {
      this.$axios({
        methods: 'get',
        url: 'ad_repairpages.php'
      }).then(res => {
        console.log(res.data)
        this.paying = res.data
      })
    }
  }
}
</script>
<style scoped>

</style>
