<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>管理员信息</span>
      <el-button style="float: right; padding: 3px 0" type="text" @click="btn">点我点我</el-button>
    </div>
    <div class="text">
      <img src="../../static/logo.png" alt=""><br>
      用户账号：admin<br>
      用户密码：admin
    </div>
  </el-card>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    btn () {
      alert('hhh什么都没有hhh')
    }
  }
}
</script>
<style scoped>
.text{
  font-size: 15px;
  line-height: 50px;
}
.text img{
  width: 200px;
}
.box-card{
  width: 450px;
}
</style>
