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

<style lang="css">

body {
  margin: 0;
  padding: 0;
}

#view {
  height: 100vh;
  background-color: #005288;
}

</style>
