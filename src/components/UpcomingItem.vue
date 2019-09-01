<template lang="html">
  <li v-on:click="handleClick">{{upcomings.flight_number}}:{{upcomings.mission_name}}</li>
</template>

<script>
import {eventBus} from '@/main.js'

export default {
  name: 'list-item',
  props: ['upcomings'],
  methods: {
    handleClick() {
      eventBus.$emit('upcoming-selected', this.upcomings)
    }
  }
}
</script>

<style lang="css" scoped>
li {
    color:white;
    width: 50vw;
    list-style-type: none;
    display: block;
    background: #000;
    font-size: 16px;
    margin: 10px 0;
    padding: 10px;
    cursor: pointer;
    transition: 0.1s all ease-in;
    text-align: right;
    font-family:cursive;
    border: solid, 5px, yellow
  }

  li:hover {
    background: #dbe8ff;
    color: #222;
  }
</style>
