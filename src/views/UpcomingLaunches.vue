<template lang="html">
<div v-if="upcomings" id="view">
  <UpcomingList :upcomings="upcomings"/>
</div>
</template>

<script>
import UpcomingList from '@/components/UpcomingList'

export default {
  name: 'upcoming-view',
  data() {
    return {
      upcomings: [],
    }
  },
  components: {
    UpcomingList
  },
  mounted() {
    fetch(
        'https://api.spacexdata.com/v3/launches/upcoming?filter=flight_number,mission_name,rocket/rocket_name,links,launch_date_utc'
      )
      .then(response => response.json())
      .then((data) => {
        this.upcomings = data.sort((a, b) => {
          return a.launch_date_utc - b.launch_date_utc
        })
      })
  }
}
</script>

<style lang="css" scoped>
#view {
  display: flex;
  justify-content: space-around;
}
</style>
