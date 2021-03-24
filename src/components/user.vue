<template>
    <div>
    <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
    <div id="main" style="width: 800px;height:600px;"></div>
    </div>
</template>
<script>
export default {
  name: 'user',
  data () {
    return {

    }
  },
  mounted () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = this.$echarts.init(document.getElementById('main'))

    var option = {
      title: {
        text: '报修者/维修者'
      },
      tooltip: {},
      legend: {
        data: ['人数']
      },
      xAxis: {
        data: ['报修者', '维修者', '管理员', '总人数']
      },
      yAxis: {},
      series: [{
        name: '人数',
        type: 'line',
        color: 'blue',
        data: [2, 3, 1, 6]
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
