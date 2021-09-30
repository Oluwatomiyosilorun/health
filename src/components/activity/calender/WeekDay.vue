<template>
  <ol class="day-of-week pl-0">
    <li v-for="weekday in weekdays" :key="weekday">{{ weekday }}</li>
  </ol>
</template>

<script>
const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default {
  name: "CalendarWeekdays",

  computed: {
    weekdays() {
      return WEEKDAYS;
    }
  }
};
</script>

<style lang="scss" scoped>
.day-of-week {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding-bottom: 0px !important;
  padding-top: 3px !important;
  li{
    list-style-type: none;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 0px;
    color: #1D2B4F;
  }
}

.day-of-week > * {
  text-align: right;
  padding-right: 5px;
}
</style>
