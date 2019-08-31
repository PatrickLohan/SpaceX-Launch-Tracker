<template lang="html">
  <div v-if="launches">
    <ul>
      <UpcomingItem v-for="(launch, index) in launches" :key="index"
      :launch="launch" />
    </ul>
  </div>
</template>

<script>
import UpcomingItem from '@/components/UpcomingItem'

export default {
  name: 'upcoming-list',
  props: ['launches'],
  components: {
    UpcomingItem
  }
}
</script>

<style lang="css" scoped>
</style>
