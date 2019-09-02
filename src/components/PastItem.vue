<template lang="html">
  <li v-on:click="handleClick">{{pasts.flight_number}}:{{pasts.mission_name}}</li>
</template>

<script>
import {eventBus} from '@/main.js'

export default {
  name: 'past-item',
  props: ['pasts'],
  methods: {
    handleClick() {
      eventBus.$emit('past-selected', this.pasts)
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
    background: #005288;
    font-size: 16px;
    margin: 10px 0;
    padding: 10px;
    cursor: pointer;
    transition: 0.1s all ease-in;
    text-align: right;
    font-family:cursive;
    border: solid, 5px, yellow;
    font-family: 'Titillium Web', sans-serif;
  }

  li:hover {
    background: #a7a9ac;
    color: #222;
  }
</style>
