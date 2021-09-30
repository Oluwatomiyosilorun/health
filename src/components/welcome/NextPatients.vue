<template>
    <div class="card">
        <div class="patient_container">
            <div class="d-flex justify-content-between">
              <div>
                  <h4 class="mr-auto">Your next patients</h4>
                  <hr>
              </div>
              <h6 class="mt-1">View All <i class="fa fa-arrow-right small_icons" aria-hidden="true"></i></h6>
            </div>

            <div class="patient_details" v-for="item in patients_appointments" :key="item.id">
                <div class="patient d-flex">
                    <p class="patient_time">{{item.createdAt | formatDateToTime}}</p>
                    <div class="avatar">
                    <div class="d-flex">
                        <img :src='item.avatar' />
                        <p class="patient_name">{{item.name}}</p>
                    </div>
                    <p>...</p>
                    </div>
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
      patients_appointments: [],
    }
  },
  created(){
      const res = axios.get(`https://612b668c22bb490017893b1d.mockapi.io/health/v1/welcome`)
      .then (res =>{
          this.patients_appointments= res.data.appointments
      })
      .catch(error =>{
          console.log("There is an error");
      })
  },
}
</script>

<style lang="scss" scoped>
  .card{
    overflow-y: scroll;
    .patient_container{
      .patient_details{
        .patient{
          margin: 16px 0px;
          .patient_time{
            font-style: normal;
            font-weight: normal;
            font-size: 13px;
            line-height: 16px;
            display: flex;
            color: #1D2B4F;
          }
          .avatar{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 16px 24px;
            width: 624px;
            height: 72px;
            left: 72px;
            top: 0px;
            background: rgba(134, 146, 166, 0.05);
            border-radius: 8px;
            margin: 0px 16px;
            img{
              width: 40px;
              height: 40px;
              border: 2px solid #8692A6;
              box-sizing: border-box;
              border-radius: 50%;
            }
            .patient_name{
              font-style: normal;
              font-weight: 500;
              font-size: 16px;
              line-height: 19px;
              color: #8692A6;
              margin: 10px;
              font-family: Inter;
            }
          }
        }
      }
    }
  }
  h6{
    color: #1565D8;
    font-size: 14px;
    line-height: 17px;
    font-family: Inter;
    cursor: pointer;
  }
</style>