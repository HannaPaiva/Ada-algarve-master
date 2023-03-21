<template>
  <div>

    <section id="about">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5 py-5">
            <div class="row">
              <div class="col-12 mt-4">
                <div class="info-box">
                  <img src="img/icon4.png" alt="">
                  <div class="ms-4">
                    <h5>Sobre a ADA - Academia de Dança do Algarve</h5>
                    <p>(Preencher) </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="col-lg-5">
            <img src="img/about.png" alt="">
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>


export default {

  components: {

  },
  name: 'AboutContainer',

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

<style scoped>
.intro {
  margin-bottom: 36px;
  text-align: center;
}

.intro p {
  max-width: 500px;
}

.intro h6 {
  color: var(--brand);
  font-weight: 400;
  text-transform: uppercase;
}

.intro h1 {
  margin-top: 15px;
  margin-bottom: 15px;
}

.info-box {
  align-items: center;
  display: flex;
}

.info-box img {
  width: 90px;
}
</style>
