<template>
    <div class="card">
        <div class="appointment_container">
            <div class="d-flex justify-content-between">
            <div>
                <h4 class="mr-auto">Appointment Statistics</h4>
                <hr>
            </div>
            <h6 class="mt-1">Show <i class="fa fa-arrow-right small_icons" aria-hidden="true"></i></h6>
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

</style>