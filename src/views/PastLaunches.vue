<template lang="html">
<div v-if="pasts" id="view">
  <PastsList :upcomings="pasts"/>
  <PastsDetails v-if="selectedPasts" :pasts="selectedPasts" />
</div>
</template>

<script>
import PastsList from '@/components/PastsList'
import PastDetails from '@/components/PastDetails'
import {eventBus} from '@/main.js'

export default {
  name: 'past-view',
  data() {
    return {
      pasts: [],
      selectedPast: null
    }
  },
  components: {
    PastsList,
    PastDetails
  },
  mounted() {
    fetch(
        'https://api.spacexdata.com/v3/launches/past?filter=flight_number,mission_name,details,rocket/rocket_name,links,launch_date_utc'
      )
      .then(response => response.json())
      .then((data) => {
        this.upcomings = data.sort((a, b) => {
          return a.launch_date_utc - b.launch_date_utc
        })
      })
      eventBus.$on('past-selected', (upcoming) => {
        this.selectedPast = past
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
