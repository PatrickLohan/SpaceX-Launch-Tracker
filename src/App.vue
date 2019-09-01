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
  font-family: 'Lato', sans-serif;
  margin: 0;
  padding: 0;
}

h1,h2,h3{
  font-family: 'Titillium Web', sans-serif;
}
#view {
  background-color: #005288;
}

</style>
