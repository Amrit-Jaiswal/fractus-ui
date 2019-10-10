<template lang="html">

<md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Summary">{{ item.summary }}</md-table-cell>
        <md-table-cell md-label="vsHistory">{{ item.History }}</md-table-cell>
        <md-table-cell md-label="vsPeers">{{ item.Peers }}</md-table-cell>
      </md-table-row>
      </md-table>

</template>

<script lang="js">
  export default  {
    name: 'summary',
    
    props: [],
     users: [
        {
          summary:"Envirnoment",
          History: "Neutral",
          Peers: "Better",
        },
         {
          summary:"Social",
          History: "Neutral",
          Peers: "Worse",
        },
        {
          summary:"Governance",
          History: "Better",
          Peers: "Neutral",
        },
      ],
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

<style scoped lang="scss">
  .summary {

  }
</style>
