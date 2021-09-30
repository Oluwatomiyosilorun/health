<template>
  <div class="body_container mt-5">
      <div class="overview_content">
          <Welcome />

          <Activity />
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import Welcome from '../components/welcome/Welcome.vue'
import Activity from '../components/activity/Activity.vue'

export default {
  name: "Overview",
  components: {
    Welcome,
    Activity
  },
};
</script>

<style lang="scss" scoped>
    .overview_content{
      display: grid;
      grid-template-columns: 744px auto;
      font-family: Inter;
      grid-column-gap: 10px  
    }
    
    
    
    
</style>