<template lang="html">
<div v-if="upcomings" id="view">
  <UpcomingList :upcomings="upcomings"/>
  <UpcomingDetails v-if="selectedLaunch" :film="selectedLaunch" />
</div>
</template>

<script>
import UpcomingList from '@/components/UpcomingList'
import UpcomingDetails from '@/components/UpcomingDetails'
import {eventBus} from '@/main.js'

export default {
  name: 'upcoming-view',
  data() {
    return {
      upcomings: [],
      selectedLaunch: null
    }
  },
  components: {
    UpcomingList,
    UpcomingDetails
  },
  mounted() {
    fetch(
        'https://api.spacexdata.com/v3/launches/upcoming?filter=flight_number,mission_name,details,rocket/rocket_name,links,launch_date_utc'
      )
      .then(response => response.json())
      .then((data) => {
        this.upcomings = data.sort((a, b) => {
          return a.launch_date_utc - b.launch_date_utc
        })
      })
      eventBus.$on('launch-selected', (launch) => {
        this.selectedLaunch = launch
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
