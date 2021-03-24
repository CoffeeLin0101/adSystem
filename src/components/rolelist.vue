<template>
<div>
    <!-- 报修 -->
    <div>
    <el-table :data="roledata" style="width: 100%" border>
        <el-table-column label="报修人员">
            <el-table-column prop="id_repairer" label="ID" width="180"></el-table-column>
            <el-table-column prop="sex_repairer" label="性别" width="180"></el-table-column>
            <el-table-column prop="name_repairer" label="姓名" width="180"></el-table-column>
            <el-table-column prop="no_repairer" label="学号" width="180"></el-table-column>
            <el-table-column prop="pass_repairer" label="密码" width="180"></el-table-column>
            <el-table-column prop="phone_repairer" label="联系方式"></el-table-column>
        </el-table-column>
    </el-table>
    </div>
    <!-- 维修 -->
    <div>
    <el-table :data="roledata1" style="width: 100%" border class="roledata1">
        <el-table-column label="维修人员">
            <el-table-column prop="id_maintainer" label="ID" width="180"></el-table-column>
            <el-table-column prop="sex_maintainer" label="性别" width="180"></el-table-column>
            <el-table-column prop="name_maintainer" label="姓名" width="180"></el-table-column>
            <el-table-column prop="no_maintainer" label="工号" width="180"></el-table-column>
            <el-table-column prop="pass_maintainer" label="密码" width="180"></el-table-column>
            <el-table-column prop="phone_maintainer" label="联系方式"></el-table-column>
        </el-table-column>
    </el-table>
    </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      roledata: [],
      roledata1: []
    }
  },
  mounted () {
    //   同时请求
    this.$axios.all([this.rolelist(), this.rolelist1()])
      .then(this.$axios.spread(function (acct, perms) {
      }))
  },
  methods: {
    rolelist () {
      this.$axios({
        methods: 'get',
        url: 'ad_repairer.php'
      }).then(res => {
        console.log(res.data)
        this.roledata = res.data
      })
    },
    rolelist1 () {
      this.$axios({
        methods: 'get',
        url: 'ad_maintainer.php'
      }).then(res => {
        console.log(res.data)
        this.roledata1 = res.data
      })
    }

  }
}
</script>
<style scoped>
.roledata1{
    margin-top: 30px;
}
</style>
