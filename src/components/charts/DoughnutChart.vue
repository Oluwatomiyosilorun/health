<script>
  import { Doughnut } from 'vue-chartjs'

  export default {
    extends: Doughnut,
    data () {
      return {
        chartData: {
          datasets: [{
              borderWidth: 1,
              borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)'                
              ],
              backgroundColor: [
              '#FF8080',
              '#00CFDE',
              '#5A5EED',
              '#20CB85',                
              ],
              data: [1000,	500,	1500,	1000]
            }]
        },
        options: {
          legend: {
            display: false
          },
          cutoutPercentage: 85,
          responsive: true,
          maintainAspectRatio: true
        }
      }
    },
    mounted () {
      this.renderChart(this.chartData, this.options)
    }
  }
</script>