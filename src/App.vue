<template lang="html">
  <div id="view">
    <Header/>
    <router-view id="view"/>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style lang="css" scoped>
#view {
  background-color: black;
  height: 100vh;
}
</style>
