<template lang="html">
  <div id="header-container">
    <img src="@/assets/spaceXlogo.png">
  </div>
</template>

<script>
export default {
  name: 'header-view'
}
</script>

<style lang="css" scoped>
#header-container {
  display: flex;
  justify-content: center;
}
img{
  width: 100vw;
  height: 20vh;
}
</style>
