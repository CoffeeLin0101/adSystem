<template>
    <div class="login_container">
        <div class="login_box">
            <!-- 头像 -->
            <div class="avatar_box"><img src="../static/logo.png" alt=""></div>
            <!-- 表单 -->
            <el-form label-width="80px" class="login_form" :model="form" :rules="rules" ref="formref">
                <!-- 用户名 -->
            <el-form-item label="用户名称" prop="name">
                <el-input  prefix-icon="el-icon-user" v-model="form.name"></el-input>
            </el-form-item>
            <!-- 密码 -->
            <el-form-item label="用户密码" prop="password">
                <el-input  prefix-icon="el-icon-lock" type="password" v-model="form.password"></el-input>
            </el-form-item>
            <!-- 按钮 -->
            <el-form-item class="btn">
                <el-button type="primary" @click="login">登录</el-button>
            </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      form: {
        name: 'admin',
        password: 'admin'
      },
      rules: {
        //   验证用户名
        name: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
        ],
        // 验证密码
        password: [
          { required: true, message: '请输入用户密码', trigger: 'blur' },
          { min: 5, max: 8, message: '长度在 5 到 8 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.formref.validate(async vaild => {
        // console.log(vaild)
        if (!vaild) {
          return 0
        } else {
          this.$axios({
            methods: 'get',
            url: 'https://www.bbin.design/adSystem/adSystem.php',
            headers: {
              'Content-Type': 'application/json;charset=UTF-8'
            },
            params: {
              name: this.form.name,
              password: this.form.password
            }
          })
            .then(res => {
            //   console.log(res)
              if (res.data === 'fail') {
                alert('用户名或密码错误！')
              } else {
                console.log(res)
                alert('登陆成功！')
                sessionStorage.setItem('name', this.form.name)
                this.$router.push('/home')
              }
            })
            .catch(err => {
              console.error(err)
            })
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.login_container{
    background-color: #596183;
    height: 100%;
}
.login_box{
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 5%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    .avatar_box{
        height: 130px;
        width: 130px;
        position: absolute;
        left: 50%;
        transform: translate(-50%,-50%);
        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            opacity: 1;
        }
    }
}
.btn{
    display: flex;
    justify-content: flex-end;
}
.login_form{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}
</style>
