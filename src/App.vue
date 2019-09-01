<template lang="html">
  <div id="view">
    <Header/>
    <UpcomingLaunches/>

  </div>
</template>

<script>
import Header from '@/components/Header'
import UpcomingLaunches from '@/views/UpcomingLaunches'

export default {
  name: 'app',
  components: {
    Header,
    UpcomingLaunches
  }
}
</script>

<style lang="css" scoped>
#view {
  background-color: black;
  height: 100vh;
}
</style>
