<template>
  <div class="container">
      <div>
        <div>
            <h4>Are you sure ? 😞</h4>
        </div>
            
        <div class="text-center">
            <router-link to="/">
                <button class="btn btn-danger">
                YES ! 
                </button>
            </router-link>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        font-size: 40px;
        color: rgb(167, 167, 167);
        font-weight: 600;
        font-family: Nunito;
    }
</style>