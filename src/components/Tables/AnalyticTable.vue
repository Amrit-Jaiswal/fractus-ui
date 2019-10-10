<template>

<div>

<md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Summary">{{ item.summary }}</md-table-cell>
        <md-table-cell md-label="vsHistory">{{ item.History }}</md-table-cell>
        <md-table-cell md-label="vsPeers">{{ item.Peers }}</md-table-cell>
      </md-table-row>
      </md-table>

  <h4>Envirnoment</h4>
    <md-table v-model="Envirnoment" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Fields">{{ item.fields }}</md-table-cell>
        <md-table-cell md-label="Current-Value">{{ item.value }}</md-table-cell>
        <md-table-cell md-label="History">{{ item.change }}</md-table-cell>
        <md-table-cell md-label="Impact">{{ item.impact }}</md-table-cell>
      </md-table-row>
    </md-table>
<br>
<h4>Social</h4>
<md-table v-model="Social" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Fields">{{ item.fields }}</md-table-cell>
       <md-table-cell md-label="Current-Value">{{ item.value }}</md-table-cell>
        <md-table-cell md-label="History">{{ item.change }}</md-table-cell>
        <md-table-cell md-label="Impact">{{ item.impact }}</md-table-cell>
      </md-table-row>
    </md-table>
<br>

<h4>Governance</h4>
    <md-table v-model="Governance" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Fields">{{ item.fields }}</md-table-cell>
        <md-table-cell md-label="Current-Value">{{ item.value }}</md-table-cell>
        <md-table-cell md-label="History">{{ item.change }}</md-table-cell>
        <md-table-cell md-label="Impact">{{ item.impact }}</md-table-cell>
      </md-table-row>
    </md-table>



  </div>
</template>

<script>
export default {
  name: "analytic-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
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
      Envirnoment: [
        
          {
            fields: "GHG_Revenue",
            value: "986",
            change: "441",
            impact: "Worse",


          },
          {
            fields: "GHG_mboe",
            value: "51",
            change: "-14.4",
            impact: "Better",
          },
          {
            fields: "Carbon_Res",
            value: "24",
            change: "10",
            impact: "Better",
          },
          {
            fields: "Oil_Prod",
            value: "34",
            change: "-9",
            impact: "Better",
          },
          {
            fields: "Energy_mboe",
            value: "87",
            change: "5.1",
            impact: "Worse",
          },
      ],
      Social:[
          {
            fields: "Women_mgmt",
            value: "0.44",
            change: "0.14",
            impact: "Better",
          },
          {
            fields: "Women_emp",
            value: "53",
            change: "-14",
            impact: "Worse",
          },
          {
            fields: "Emp_turnover",
            value: "26",
            change: "7",
            impact: "Worse",
          },
          {
            fields: "Emp_unionized",
            value: "36",
            change: "8",
            impact: "Worse",
          },
          {
            fields: "Lost_time_rate",
            value: "0.06",
            change: "-0.15",
            impact: "Better",
          },
      ],
      Governance:[
          {
            fields: "Indep_directors",
            value: "93",
            change: "-0.6",
            impact: "Worse",
          },
          {
            fields: "Percent_board_mem",
            value: "16.9",
            change: "2.8",
            impact: "Better",
          },
          {
            fields: "Director_avg_age",
            value: "60",
            change: "2",
            impact: "Worse",
          },
          {
            fields: "Director_meet_atted",
            value: "77",
            change: "1",
            impact: "Better",
          },
          {
            fields: "Board_size",
            value: "12",
            change: "-2",
            impact: "Better",
          },
           
      ],
    };
  }
};
</script>

<style scoped lang="scss">
  .analytic-table {

  }
</style>
