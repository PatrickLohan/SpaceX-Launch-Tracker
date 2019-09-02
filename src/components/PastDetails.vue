<template lang="html">
  <div id="pastDetails">
    <div id="detailWrapper">
      <h2>Flight {{pasts.flight_number}}</h2>
      <div id="flexWrapper">
        <div class="pasts-details">
          <p><span>Mission: </span>{{pasts.mission_name}}</p>
          <p><span>Date: </span>{{pasts.launch_date_utc | format}}</p>
          <p><span>Countdown: </span>{{pasts.launch_date_utc | fromNow}} days</p>
          <p><span>Rocket: </span>{{pasts.rocket.rocket_name}}</p>
          <p><span>Details: </span>{{pasts.details}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'past-details',
  props: ['pasts']
}

</script>



<style lang="css" scoped>
span {
  color: #22272b;
}
.pasts-details {
  color: #a7a9ac;
  font-variant: small-caps;
}
#pastDetails {
  box-sizing: border-box;
  height: 70vh;
  width: 50vw;
  padding: 10px;
  border: 1px solid #a7a9ac;
  margin: 15px 10px 0 0;
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
  color: #FFF;
  margin: 10px 0 20px;
  padding: 0;
}

p span {
  font-weight: bold;
}
</style>
