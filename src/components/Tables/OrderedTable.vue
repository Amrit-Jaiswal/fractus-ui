<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="ESG Score">{{ item.ESG_Score }}</md-table-cell>
        <md-table-cell md-label="Envirnoment">{{ item.Envirnoment }}</md-table-cell>
        <md-table-cell md-label="Social">{{ item.Social }}</md-table-cell>
        <md-table-cell md-label="Governance">{{ item.Governance }}</md-table-cell>
        <md-table-cell md-label="Country">{{ item.country }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "ordered-table",
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
          id: 1,
          name: "Suzlon",
          ESG_Score: "80",
          Envirnoment: "Good",
          Social : "Good",
          Governance : "Excellent",
          country: "India",
          
        },
        {
          id: 2,
          name: "Reliance",
          ESG_Score: "58",
          Envirnoment: "Good",
          Social : "Good",
          Governance : "Ok",
          country: "India"
        },
        {
          id: 3,
          name: "Samsung",
          ESG_Score: "45",
          Envirnoment: "Bad",
          Social : "Good",
          Governance : "Ok",
          country: "India"
        },
        {
          id: 4,
          name: "Philips",
           ESG_Score: "69",
          Envirnoment: "Good",
          Social : "Excellent",
          Governance : "Good",
          country: "India"
        }
      ]
    };
  }
};
</script>
