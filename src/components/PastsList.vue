<template lang="html">
  <div v-if="pasts">
    <ul>
      <PastItem v-for="(past, index) in pasts" :key="index"
      :pasts="past" />
    </ul>
  </div>
</template>

<script>
import PastItem from '@/components/PastItem'

export default {
  name: 'past-list',
  props: ['pasts'],
  components: {
    PastItem
  }
}
</script>

<style lang="css" scoped>
</style>
