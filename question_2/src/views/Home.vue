<template>
  <v-card>
    <v-card-title>
      Categories
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="mDataArray"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>

import axios from 'axios'
export default {
  name: "Home",

  components: {
  },
  mounted() {
    this.loadData()
  },
  methods: {
    loadData(){ 
      axios.get("https://api.publicapis.org/categories").then( (response) => {
        for(let index = 0; index < response.data.length; index++) {
          this.mDataArray.push({
            categories: response.data[index]
          })
        }
      })
    }
  },
  data() {
    return {
      search: "",
      mDataArray: [],
      headers: [
        {
          text: "Categories",
          value: "categories"
        },
      ]
    };
  }
};
</script>
