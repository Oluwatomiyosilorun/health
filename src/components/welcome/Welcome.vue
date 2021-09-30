<template>
    <div class="welcome">
        <div class="welcome_container d-flex">
            <div class="welcome_speech">
            <h4><span>Welcome,</span> Dr. Fayemi David</h4>
            <p>You have 16 new appointments and there are currently 23,445 patients in the waiting room. Have a nice day at work!</p>
            <div class="buttons d-flex">
                <router-link to="/app/schedule" exact >
                    <button class="btn btn-primary mr-2"><i class="fa fa-eye small_icons" aria-hidden="true"></i>View your appointments</button>
                </router-link>
                <button class="btn btn-primary">Go to waiting room<i class="fa fa-arrow-right small_icons" aria-hidden="true"></i></button>
            </div>
            </div>
            <div class="character">
            <img src="../../assets/dashboard.svg" alt=""/>
            </div>
        </div>

        <TotalBox />

        <NextPatients />

        <AppointmentStats />
    </div>
</template>

<script>
import TotalBox from "../welcome/TotalBox.vue"
import NextPatients from "../welcome/NextPatients.vue"
import AppointmentStats from "../welcome/AppointmentStats.vue"
export default {
    components: {
        TotalBox,
        NextPatients,
        AppointmentStats
    }
}
</script>

<style lang="scss">
</style>