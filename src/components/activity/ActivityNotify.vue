<template>
  <div class="calendar card ml-auto mt-3">
        <div>
            <h4>Activities</h4>
            <hr/>
        </div>
        <SingleActivity iconOne="../../assets/act1.svg" description="There are 3 new ready reports for <b>Tosin Odubela</b>"/>

        <div class="activity d-flex">
            <div class="activity_image mr-3"> 
                <img src="../../assets/act2.svg" />
            </div>
            <div class="activity_details">
                <p>There are 3 new ready reports for <b>Tosin Odubela</b></p>
            </div>
        </div>


        <div class="activity d-flex">
            <div class="activity_image mr-3"> 
                <img src="../../assets/act3.svg" />
            </div>
            <div class="activity_details">
                <p>There are 3 new ready reports for <b>Tosin Odubela</b></p>
            </div>
        </div>
    </div>
</template>

<script>
import SingleActivity from './SingleActivity.vue'
export default {
    components: {
        SingleActivity
    }
}
</script>

<style scoped>
    
</style>