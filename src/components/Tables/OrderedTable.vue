<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Amount">{{ item.salary }}</md-table-cell>
        <md-table-cell md-label="Country">{{ item.country }}</md-table-cell>
        <md-table-cell md-label="City">{{ item.city }}</md-table-cell>
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
          name: "Dakota Rice",
          salary: "$36,738",
          country: "India",
          city: "New Delhi"
        },
        {
          id: 2,
          name: "Minerva Hooper",
          salary: "$23,738",
          country: "India",
          city: "Chennai"
        },
        {
          id: 3,
          name: "Sage Rodriguez",
          salary: "$56,142",
          country: "India",
          city: "Surat"
        },
        {
          id: 4,
          name: "Philip Chaney",
          salary: "$38,735",
          country: "India",
          city: "Pune"
        }
      ]
    };
  }
};
</script>
