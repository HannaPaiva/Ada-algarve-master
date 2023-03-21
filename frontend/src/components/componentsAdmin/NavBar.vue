<template>
  <div>
  
    <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
      <div class="container">
        <a class="navbar-brand" href="#">Academia de Dança do Algarve</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/adagest/" class="nav-link"> Inicial </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/adagest/subs" class="nav-link"> Contactos </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/adagest/subs" class="nav-link"> Galeria </router-link>
            </li>
          </ul>
          <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-brand ms-lg-3">Inscreva-se</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>


export default {

  components: {

  },
  name: 'NavBarAdmin',

  data() {
    return {

    }

  },

  methods: {


  },

  mounted() {

  },

  computed: {

  }
}


</script>

<style scoped></style>
