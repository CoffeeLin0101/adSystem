<template>
    <div>
    <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
    <div id="main" style="width: 800px;height:600px;"></div>
    </div>
</template>
<script>
export default {
  name: 'repair',
  data () {
    return {

    }
  },
  mounted () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = this.$echarts.init(document.getElementById('main'))

    var option = {
      title: {
        text: '已报修/维修中/已完成'
      },
      tooltip: {},
      legend: {
        data: ['单数']
      },
      xAxis: {
        data: ['已报修', '维修中', '已完成']
      },
      yAxis: {},
      series: [{
        name: '单数',
        color: 'blue',
        type: 'line',
        data: [2, 4, 12]
      }]
    }
    myChart.setOption(option)
  },
  methods: {

  }
}
</script>
<style scoped>
#main{
    margin: 0 auto;
}
</style>
