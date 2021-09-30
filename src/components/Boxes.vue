<template>
    <div class="boxes">
        <div class="d-flex justify-content-between">
            <img :src="require(`../assets/${iconOne}`)" />
            <h6>{{period}} <i class="fa fa-chevron-down" aria-hidden="true"></i></h6>
        </div>
        <div> 
            <h3 class="box_total" v-for="total of totals" :key="total">{{total.patient_stats[0]}}</h3>
            <p>{{description}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "Box",
    props:{
        iconOne: {
            type: String,
        },
        period:{
            type: String,
        },
        description:{
            type: String,
        },
    },
    data(){
    return{
      totals: []
    }
  },
  created(){
      const res = axios.get(`https://612b668c22bb490017893b1d.mockapi.io/health/v1/welcome`)
      .then (res =>{
          this.totals = res.data
      })
      .catch(error =>{
          console.log("There is an error");
      })
    
  }

}
</script>

<style lang="scss" scoped>
    .boxes{
        position: relative;
        width: 232px;
        height: 220px;
        margin-top: 25px;
        background: #FFFFFF;
        border-radius: 8px;
    }
</style>