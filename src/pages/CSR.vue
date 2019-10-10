<template>
  <div>
    <img :src="cardUserImage" height="600px" width="700px" align="center">
  </div>
</template>

<style lang="scss" scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>

<script>
export default {
  name: "user-card",
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/HKSP.jpg")
    }
  },
  data() {
    return {};
  }
};
</script>