<template lang="html">
  <div id="details-box">
    <div id="detail-wrapper">
      <h2>Mission: {{ launchData.mission_name }}</h2>
      <img
        :src="launchData.links.mission_patch_small"
        height="100vh"
        width="100vw"
      />
      <div id="flex-wrapper">
        <div class="launch-details">
          <p><span>Flight: </span>{{ launchData.flight_number }}</p>
          <p><span>Date: </span>{{ launchData.launch_date_utc | format }}</p>
          <p>
            <span>Countdown: </span
            >{{ launchData.launch_date_utc | fromNow }} days
          </p>
          <p><span>Rocket: </span>{{ launchData.rocket.rocket_name }}</p>
          <p><span>Details: </span>{{ launchData.details }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "launch-details",
  props: ["launchData"],
};
</script>

<style lang="css" scoped>
span {
  color: #22272b;
}
.launch-details {
  color: #a7a9ac;
  font-variant: small-caps;
}
#details-box {
  color: #e2e2e2;
  background-color: #282828;
  box-sizing: border-box;
  height: 70vh;
  width: 50vw;
  padding: 10px;
  border: 1px solid #a7a9ac;
  margin: 15px 10px 0 0;
}

#detail-wrapper {
  box-sizing: border-box;
  padding: 10px;
  height: 100%;
  border-radius: 3px;
}

#flex-wrapper {
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
}

#left,
#right {
  width: 45%;
}

#right img {
  width: 100%;
}

#left p:first-child {
  margin-top: 0;
}

h2 {
  color: #a7a9ac;
  margin: 10px 0 20px;
  padding: 0;
}

p span {
  font-weight: bold;
}
</style>
