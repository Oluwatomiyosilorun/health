<script>
  import { Bar } from 'vue-chartjs'

  export default {
    extends: Bar,
    data() {
      return {
        chartData: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep",
            "Oct", "Nov", "Dec"
          ],
          datasets: [
            {
                borderWidth: 1,
                backgroundColor: '#06A77D',
                borderColor: '#06A77D',
                barPercentage: 1,
                barThickness: 10,
                maxBarThickness: 8,
                minBarLength: 2,
                data: [30, 19, 3, 5, 2, 3, 20, 3, 5, 6, 2, 1],
                order: 1
            },
            {
                borderWidth: 1,
                backgroundColor: '#FF8080',
                borderColor: '#FF8080',
                barPercentage: 1,
                barThickness: 11,
                maxBarThickness: 8,
                minBarLength: 2,
                data: [10, 5, 1, 4, 15, 3, 20, 3, 5, 6, 2, 1],
                order: 2
            },
          
          ]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                color: 'rgba(134, 146, 166, 0.05)',
                lineWidth: 1,
                display: true
              }
            }],
            xAxes: [{

              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: false
          },
          tooltips: {
                callbacks: {
                label: function(tooltipItem) {
                        return tooltipItem.yLabel;
                }
                }
            },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted() {
      this.renderChart(this.chartData, this.options)
    }
  }
</script>

<style scoped>
    #bar-chart{
      height: 300px !important;
      width: 665px !important;
    }
</style>