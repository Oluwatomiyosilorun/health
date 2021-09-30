<template>
    <div class="calendar card ml-auto mt-3 d-flex">
        <div class="d-flex justify-content-between">
            <div>
                <h4>Patients by Gender</h4>
                <hr>
            </div>
            <p>This<select>
                    <option>month</option>
                </select>
            </p>
        </div>

        <div class="d-flex justify-content-between">
            <div style="height: 199px; width: 195px;">
                <doughnut-chart></doughnut-chart>
            </div>
            <div class="chart-label">
                <li><i class="fa fa-circle one" aria-hidden="true"></i>Male</li>
                <li><i class="fa fa-circle two" aria-hidden="true"></i>Female</li>
                <li><i class="fa fa-circle three" aria-hidden="true"></i>Transgender</li>
                <li><i class="fa fa-circle four" aria-hidden="true"></i>Other</li>
            </div>
        </div>
        
    </div>
</template>

<script>
import DoughnutChart from '../charts/DoughnutChart.vue'
export default {
    components: {
        DoughnutChart,
    }
}
</script>

<style lang="scss" scoped>
  #doughnut-chart{
    height: 215px !important;
    width: 215px !important;
  }

  p{
    color: #8692A6;
    font-weight: normal;
    font-family: Inter;
    font-size: 14px;
    line-height: 17px;
    select{
    border: none;
    outline: none;
    box-shadow: none;
    color: #699ae6 !important;
  }
  }
  

  .chart-label{
    width: 40%;
    padding: 10px 0px;
    li{
    list-style-type: none;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: #1D2B4F;
    margin: 10px 8px;
    .fa-circle{
      width: 15%;
      font-size: 11px;
    }
    .one{
      color:#FF8080;    
    }
    .two{
      color: #00CFDE;
    }
    .three{
      color: #5A5EED;
    }
    .four{
      color: #20CB85;
    }
}
  }

 


</style>