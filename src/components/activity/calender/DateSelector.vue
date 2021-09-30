<template>
  <div class="calendar-date-selector">
    <span @click="selectPrevious"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>
    <!-- <span @click="selectCurrent">Today</span> -->
    <span @click="selectNext"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "CalendarModeSelector",

  props: {
    currentDate: {
      type: String,
      required: true
    },

    selectedDate: {
      type: Object,
      required: true
    }
  },

  methods: {
    selectPrevious() {
      let newSelectedDate = dayjs(this.selectedDate).subtract(1, "month");
      this.$emit("dateSelected", newSelectedDate);
    },

    selectCurrent() {
      let newSelectedDate = dayjs(this.currentDate);
      this.$emit("dateSelected", newSelectedDate);
    },

    selectNext() {
      let newSelectedDate = dayjs(this.selectedDate).add(1, "month");
      this.$emit("dateSelected", newSelectedDate);
    }
  }
};
</script>

<style lang="scss" scoped>
.calendar-date-selector {
    display: flex;
    justify-content: space-between;
    color: #1565D8;
    span{
      width: 24px;
      height: 24px;
      background: rgba(134, 146, 166, 0.1);
      border-radius: 4px;
      margin: 0px 8px;
      text-align: center;
    }
}

.calendar-date-selector > * {
  cursor: pointer;
  user-select: none;
}
</style>