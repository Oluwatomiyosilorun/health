<template>
    <div class="body_container mt-5">
      <div class="overview_content">
        <div class="welcome">
            <div class="welcome_container d-flex">
              <div class="welcome_speech mr-auto">
                <h4>Your Schedule</h4>
                <p>YAll client consultations are available here. You can intiate consultations for each client’s proceedure.</p>
                <div class="buttons d-flex">
                    <button class="btn btn-primary mr-2"><i class="fa fa-eye small_icons" aria-hidden="true"></i>Add new schedule</button>
                </div>
              </div>
              <div class="character mr-4">
                <img src="../assets/schedule.svg" alt=""/>
              </div>
            </div>
        </div>

        <div class="containing_div">
          <div>
            <div class="calender_section mt-4">
              <Calendar />
            </div>
            <div>
              <ActivityNotify />
            </div>
          </div>
          <div class="appointment_section">
              <DaySchedule />
          </div>
        </div>
      </div>
  </div>
</template>

<script>
    import ActivityNotify from '../components/activity/ActivityNotify.vue';
    import Calendar from '../components/activity/calender/Calender.vue'
    import DaySchedule from '../components/DaySchedule.vue';
    export default {
        components:{
          Calendar,
          DaySchedule,
          ActivityNotify
        }
    }
</script>

<style lang="scss" scoped>
    .welcome{
        .welcome_container{
            width: 100%;
            .character{
                top: -4%;
                right: 0;
            }
            .welcome_speech{
                p{
                    width: 460px;
                }
            }
        }
    }

    .containing_div{
      display: grid;
      grid-template-columns: 360px auto;
      grid-column-gap: 20px;
    }
    .card{
      width: auto;   
    }
</style>