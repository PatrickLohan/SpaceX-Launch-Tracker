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

body {
  margin: 0;
}

html {
  background: url(assets/tesla_starman.jpeg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

#view {
  height: 100vh;
}

</style>
