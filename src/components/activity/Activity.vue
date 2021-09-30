<template>
    <div class="containing_activities">
        <Calendar />

        <DoughContainer />

        <ActivityNotify />
    </div>
</template>

<script>
import Calendar from './calender/Calender.vue'
import DoughContainer from './DoughContainer.vue'
import ActivityNotify from './ActivityNotify.vue'
export default {
    components: {
        Calendar,
        DoughContainer,
        ActivityNotify
    }
}
</script>

<style lang="scss" scoped>

</style>