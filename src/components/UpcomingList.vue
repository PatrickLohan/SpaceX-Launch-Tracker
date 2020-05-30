<template lang="html">
  <div v-if="upcomings">
    <ul>
      <UpcomingItem v-for="(upcoming, index) in upcomings" :key="index"
				:upcomings="upcoming"
			></UpcomingItem>
    </ul>
  </div>
</template>

<script>
import UpcomingItem from '@/components/UpcomingItem'

export default {
  name: 'upcoming-list',
  props: ['upcomings'],
  components: {
    UpcomingItem
  }
}
</script>

<style lang="css" scoped>
</style>
