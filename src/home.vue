<template>
    <el-container class="home-container">
        <!-- 头部 -->
    <el-header>
        <span class="title">管理员主页</span>
        <el-button type="warning" round>你好，admin</el-button>
        <el-button type="info" @click="out" round>退出</el-button>
    </el-header>
    <el-container>
        <!-- 导航 -->
        <el-aside width="200px">
        <el-menu background-color="#344443" text-color="#fff" unique-opened router>
            <!-- 单导航 -->
            <el-menu-item index="userinfo">
                <i class="el-icon-user"></i>
                <span slot="title">用户信息</span>
            </el-menu-item>
            <!-- 多导航 -->
                <el-submenu index="2">
                    <template slot="title">
                    <i class="el-icon-view"></i>
                    <span>用户管理</span>
                    </template>
                    <el-menu-item index="rolelist">
                        <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>用户列表</span>
                        </template>
                    </el-menu-item>
                    </el-submenu>
                <!-- 多导航 -->
                <el-submenu index="4">
                    <template slot="title">
                    <i class="el-icon-shopping-bag-2"></i>
                    <span>订单管理</span>
                    </template>
                    <el-menu-item index="paying">
                        <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>待维修</span>
                        </template>
                    </el-menu-item>
                    <el-menu-item index="payed">
                        <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>维修中</span>
                        </template>
                    </el-menu-item>
                    <el-menu-item index="finished">
                        <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>已完成</span>
                        </template>
                    </el-menu-item>
                    </el-submenu>
                    <!-- 多导航 -->
                <el-submenu index="5">
                    <template slot="title">
                    <i class="el-icon-coin"></i>
                    <span>图表统计</span>
                    </template>
                    <el-menu-item index="user">
                        <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>用户</span>
                        </template>
                    </el-menu-item>
                    <el-menu-item index="repair">
                        <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>报单</span>
                        </template>
                    </el-menu-item>
                    </el-submenu>
            </el-menu>
        </el-aside>
        <!-- 内容 -->
        <el-main>
            <router-view />
        </el-main>
    </el-container>
    </el-container>
</template>
<script>
export default {
  name: 'home',
  methods: {
    out () {
      sessionStorage.removeItem('name')
      alert('退出登录！')
      this.$router.push('/login')
    }
  }

}
</script>
<style lang="less" scoped>
.home-container{
    height: 100%;
}
.el-header{
    background-color: #344443;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.title{
    font-size: 25px;
    color:white;
    margin: auto;
}
.el-aside{
    background-color: #344443;
    .el-menu{
        border-right: none;
    }
}
.el-main{
    background-color: #eaedf1;
}
</style>
