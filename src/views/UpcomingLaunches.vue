<template lang="html">
<div v-if="upcomings" id="view">
  <UpcomingLaunches :upcomings="upcomings"/>
</div>
</template>

<script>
import UpcomingList from '@/components/UpcomingList'

export default {
  name: 'upcoming-view'
  data() {
    return {
      upcomings: [],
    }
  }
  components: {
    UpcomingList
  }
  mounted() {
    fetch('https://api.spacexdata.com/v3/launches/upcoming')
      .then(response => response.json())
      .then((data) => {
        // for (let i = 0; i < data.length; i++) {
        //   this.upcomings.push(data[i]);
        //   console.log(data[i]);
        // }
        this.upcomings = data.sort((a, b) => {
          console.log('test');
          return a.launch_date_unix - b.launch_date_unix
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
