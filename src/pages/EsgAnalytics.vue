<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Reporting Table</h4>
            <p class="category">Reporting & Analytics Table</p>
          </md-card-header>
          <md-card-content>
          <analytic-table table-header-color="green"></analytic-table>
            <summary table-header-color="green"></summary>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>


<script lang="js">
import AnalyticTable  from "@/components/Tables/AnalyticTable.vue";
import Summary  from "@/components/Tables/Summary.vue";
  export default  {
    name: 'esg-analytics',
      components: {
   'analytic-table': AnalyticTable,
   'summary' : Summary,
  },
    props: [],
   
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

