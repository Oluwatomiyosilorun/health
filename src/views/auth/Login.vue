<template>
    <div class="container-fluid p-0">
        <div class="row vertical-center">
            <div class="col-lg-4 login_container shadow mx-auto">
                <div class="text-center p-2 login_title">
                    <h4>Login</h4>
                </div>
                <form class="w-100" v-on:submit.prevent="submitForm">
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter email" v-model="form.email" required/>
                    </div>

                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" id="pwd" placeholder="Enter Password" v-model="form.password" required/>
                    </div>

                    <div>
                        <button type="submit" class="btn btn-primary"> Submit </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "Login",
    data (){
        return{
            form:{
                email: "",
                password: "",
            }
        }
    },
    methods: {
        submitForm() {
            axios.post("https://612b668c22bb490017893b1d.mockapi.io/health/v1/login", this.form)
            .then((res)=>{
                console.log(res);
                if ((this.form.email == 'uchenna@yopmail.com') && (this.form.password == 'healthlite')) {
                    this.$router.push({path: "/app"})
                    alert('Welcome my nigga')
                }else{
                    alert('Wrong email and password. Please try again')
                    this.$router.push({path: "/"})
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .container-fluid{
        background: rgba(90, 94, 237, 0.1);
        height: 100vh;
        margin: 0;
        .vertical-center{
            display: flex;
            align-items: center;
            min-height: 100vh;
            .login_container{
            z-index: 100000;
            background: white;
            border-radius: 8px;
                .login_title{
                    border-bottom: 1px solid whitesmoke;
                    padding: 3%;
                    font-family: Nunito Sans;
                    h4{
                        margin-bottom: 0;
                    }
                }
                form{
                    padding:8%;
                    display: inline-block;
                }
            }
        }
        
    }
</style>