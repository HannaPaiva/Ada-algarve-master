<template>
  <div>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome Completo</th>
          <th scope="col">Estado</th>
          <th scope="col">Localidade</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(partner, index) in partners" :key="index">
          <th scope="row">1</th>
          <td>{{ partner.nome_completo }}</td>
          <td>{{ partner.nome_completo }}</td>
          <td>{{ partner.nome_completo }}</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>

import axios from 'axios';

export default {

  components: {

  },
  name: 'NavBar',

  data() {
    return {
      partners: [],
    }
  },

  methods: {

  },

  mounted() {
    axios.get('http://127.0.0.1:8000/api/partner')
      .then(response => {
        this.partners = response.data; // set fetched data to users array
      })
      .catch(error => {
        console.error(error);
      });
  },

  computed: {

  }
}


</script>

<style scoped></style>
