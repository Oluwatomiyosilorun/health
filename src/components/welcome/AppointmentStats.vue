<template>
    <div class="card">
        <div class="appointment_container">
            <div class="d-flex justify-content-between">
            <div>
                <h4 class="mr-auto">Appointment Statistics</h4>
                <hr>
            </div>
            <p>Show by<select>
                        <option>by Month</option>
                    </select>
                </p>
            </div>
            <bar-chart></bar-chart>
        </div>
    </div>
</template>

<script>
import BarChart from '../charts/BarChart.vue'

export default {
    components: {
        BarChart
    }
}
</script>

<style lang="scss" scoped>
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
</style>