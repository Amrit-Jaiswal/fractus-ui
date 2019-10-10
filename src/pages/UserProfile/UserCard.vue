<template>
  <md-card class="md-card-profile">
    <!-- <div class="md-card-avatar">
      <img class="img" :src="cardUserImage" />
    </div>-->

    <md-card-content>
      <h4 class="card-title">Environmental and Social Management System</h4>
      <p class="card-description">
        Be a part of the solution, 
        not part of the pollution.
      </p>
      <md-button class="md-round md-success" href="https://twitter.com/unenvironment?lang=en">Follow us on Twitter</md-button>
    </md-card-content>
  </md-card>
</template>
<script>
export default {
  name: "user-card",
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/faces/marc.jpg")
    }
  },
  data() {
    return {};
  }
};
</script>
<style></style>
