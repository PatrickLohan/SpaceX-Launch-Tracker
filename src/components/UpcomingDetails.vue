<template lang="html">
  <div id="upcomingDetails">
    <div id="detailWrapper">
      <h2>Flight {{upcomings.flight_number}}</h2>
      <div id="flexWrapper">
        <div class="upcomings-details">
          <p><span>Mission: </span>{{upcomings.mission_name}}</p>
          <p><span>Date: </span>{{upcomings.launch_date_utc}}</p>
          <p><span>Rocket: </span>{{upcomings.rocket.rocket_name}}</p>
          <p><span>Details: </span>{{upcomings.details}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'upcoming-details',
  props: ['upcomings']
}
</script>

<style lang="css" scoped>
span {
  color: #a7a9ac;
}
.upcomings-details {
  color: #005288;
  font-variant: small-caps;
}
#upcomingDetails {
  box-sizing: border-box;
  height: 50vh;
  width: 50vw;
  padding: 10px;
  border: 1px solid yellow;
  margin-right:10px;
}

#detailWrapper {
  box-sizing: border-box;
  padding: 10px;
  height: 100%;
  border-radius: 3px;
}

#flexWrapper {
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
}

#left, #right {
  width: 45%;
}

#right img {
  width: 100%;
}

#left p:first-child {
  margin-top: 0;
}

h2 {
  color: yellow;
  margin: 10px 0 20px;
  padding: 0;
}

p span {
  font-weight: bold;
}
</style>
