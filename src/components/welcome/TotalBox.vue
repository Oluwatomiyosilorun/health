<template>
    <div class="total_boxes">
        <div class="total_boxes_container d-flex justify-content-between">
            <div class="boxes">
                <div class="d-flex justify-content-between">
                    <img src="../../assets/one.svg" />
                    <h6>All Time <i class="fa fa-chevron-down" aria-hidden="true"></i></h6>
                </div>
                <div> 
                    <h3 class="box_total" >{{patients}}</h3>
                    <p class="box_title">Total Patients</p>
                </div>
                <div class="description">
                    <p><i class="fa fa-arrow-down down" aria-hidden="true"></i> 5% less than last month</p>
                </div>
            </div>

            <div class="boxes">
                <div class="d-flex justify-content-between">
                    <img src="../../assets/two.svg" />
                    <h6>Today<i class="fa fa-chevron-down" aria-hidden="true"></i></h6>
                </div>
                <div> 
                    <h3 class="box_total">{{appointment}}</h3>
                    <p class="box_title">Appointments</p>
                </div>
                <div class="description">
                    <p><i class="fa fa-arrow-up up" aria-hidden="true"></i> 15% more than yesterday</p>
                </div>
            </div>

            <div class="boxes">
                <div class="d-flex justify-content-between">
                    <img src="../../assets/three.svg" />
                    <h6>Today<i class="fa fa-chevron-down" aria-hidden="true"></i></h6>
                </div>
                <div> 
                    <h3 class="box_total">{{total_waiting}}</h3>
                    <p class="box_title">Waiting Room</p>
                </div>
                <div class="description">
                    <p><i class="fa fa-arrow-up up" aria-hidden="true"></i> 35% less than yesterday</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
    return{
      appointment: null,
      patients: null,
      total_waiting: null,
      patients_appointments: [],
    }
  },
  created(){
      const res = axios.get(`https://612b668c22bb490017893b1d.mockapi.io/health/v1/welcome`)
      .then (res =>{
          this.total_waiting = res.data.total_waiting_room
          this.patients = res.data.total_patients
          this.appointment = res.data.total_appointments
          this.patients_appointments= res.data.appointments
      })
      .catch(error =>{
          console.log("There is an error");
      })
  }
}
</script>

<style lang="scss" scoped>
    .total_boxes{
      .total_boxes_container{
        .boxes{
          position: relative;
          width: 232px;
          height: 220px;
          margin-top: 25px;
          background: #FFFFFF;
          border-radius: 8px;
          padding: 15px;
          .box_total{
            font-weight: 800;
            font-size: 26px;
            line-height: 31px;
            color: #1D2B4F;
            margin: 12px 0;
          }
          .box_title{
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 19px;
            color: #8692A6;
          }
          .description{
            p{
              font-style: normal;
              font-weight: normal;
              font-size: 14px;
              line-height: 17px;
              color: #1D2B4F;
            }
          }
        }
      }
      .down{
          color:#FF8080;
      }
      .up{
        color: #06A77D;
      }
    }
</style>