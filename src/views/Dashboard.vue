<template>
    <div class="dashboard_container">
        <div class="dashboard">
          <Sidebar/>
        </div>
        <div class="content px-3 py-4 m-0">
            <Navbar/>
            <router-view/>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar.vue'

export default {
  name: "Home",
  components: {
    Sidebar,
    Navbar
  }
 
};
</script>

<style lang="scss">
.dashboard_container{
    display: grid;
    grid-template-columns: 247px auto;
    height: 100vh;
}
.content {
    margin: 6px 6px 6px 0px;
    position: relative;
    background-color: #f5f8fa;
    height: 100vh;
    overflow-y: auto;
    width:100%;
}
</style>
