<template>
  <div class="md-layout">
    <br />
    <br />
    <div class="md-layout-item md-medium-size-100 md-size-100">
      <client-screening data-background-color="green"></client-screening>
      <!-- <question-form data-background-color="green"></question-form> -->
    </div>

    <!-- <div class="md-layout-item md-medium-size-100 md-size-50" >
        <client-screening data-background-color="green"></client-screening>
    </div>-->
  </div>
</template>

<script>
import Questionnaire from "@/pages/Questionnaire.vue";
import ClientScreening from "./ClientScreening.vue";

export default {
  components: {
    "question-form": Questionnaire,

    "client-screening": ClientScreening
  },

  data() {
    return {
      // app params
      f7params: {
        // specify routes for app
        routes: [
          {
            path: "./screening/client-screening/",
            component: ClientScreening
          },
          {
            path: "/questionnaire/",
            component: Questionnaire
          }
          // ...
        ]
        // ...
      }
    };
  }
};
</script>
