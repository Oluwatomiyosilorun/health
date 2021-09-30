<template>
    <div class="card mt-3 w-100">
        <div class="patient">
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="detail in details" :key="detail.id">
                        <th scope="row">{{detail.id}}</th>
                        <td>{{detail.name}}</td>
                        <td>{{detail.email}}</td>
                        <td>{{detail.verification_status}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
         data(){
            return{
                details: []
            }
        },
        created(){
            const res = axios.get(`https://612b668c22bb490017893b1d.mockapi.io/health/v1/patients`)
            .then (res =>{
                console.log(res)
                this.details = res.data
            })
            .catch(error =>{
                console.log("There is an error");
            })
        }
    }
</script>

<style lang="scss" scoped>
   
</style>