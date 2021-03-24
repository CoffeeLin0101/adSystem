<template>
<div id="welcome">
<h1>欢迎admin来到管理系统！</h1>
  <el-carousel :interval="3000" type="card" height="400px">
    <el-carousel-item v-for="img in items" :key="img">
        <img :src="img.url" alt="">
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {url: 'https://pic.netbian.com/uploads/allimg/210319/213619-1616160979c9b2.jpg'},
        {url: 'https://pic.netbian.com/uploads/allimg/210307/232154-1615130514ce91.jpg'},
        {url: 'https://pic.netbian.com/uploads/allimg/201004/231525-16018245259063.jpg'},
        {url: 'https://pic.netbian.com/uploads/allimg/201111/233047-1605108647d0b0.jpg'},
        {url: 'https://pic.netbian.com/uploads/allimg/190413/221558-15551649585352.jpg'},
        {url: 'https://pic.netbian.com/uploads/allimg/210304/011138-1614791498d818.jpg'}
      ]
    }
  }
}
</script>
<style>
#welcome{
    overflow: hidden;
}
  img {
      margin: 40px 100px;
      opacity: 1;
  }
  h1{
      margin: 30px 450px;
      font-size: 30px;
  }
</style>
