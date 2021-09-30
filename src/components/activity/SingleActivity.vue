<template>
  <div class="activity d-flex">
        <div class="activity_image mr-3"> 
            <img :src="require(`../../assets/${iconOne}`)" />
        </div>
        <div class="activity_details">
            <p>{{description}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SingleActivity',
    props:{
        iconOne: {
            type: String,
        },
        description:{
            type: String,
        },
    },
}
</script>

<style scoped>
    span{
        font-weight: bold;
    }
</style>