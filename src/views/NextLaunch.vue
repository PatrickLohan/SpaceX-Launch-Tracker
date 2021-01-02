<template lang="html">
<div id="view">
  <LaunchDetails :launchData="launchData" />
</div>
</template>

<script>
import LaunchDetails from '@/components/LaunchDetails'

export default {
  name: 'next-launch-view',
  data() {
    return {
      launchData: [],
    }
  },
  components: {
    LaunchDetails
  },
  mounted() {
    fetch(
      'https://api.spacexdata.com/v3/launches/next?filter=flight_number,mission_name,details,rocket/rocket_name,links,launch_date_utc'
    ).then(response => response.json())
      .then((data) => {
        this.launchData = data
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
