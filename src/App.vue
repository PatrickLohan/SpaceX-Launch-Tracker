<template lang="html">
  <div id="view">
    <Header/>
    <UpcomingList/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import UpcomingList from '@/components/UpcomingList'

export default {
  name: 'app',
  components: {
    Header,
    UpcomingList
  }
}
</script>

<style lang="css" scoped>
#view {
  background-color: black;
  height: 100vh;
}
</style>
