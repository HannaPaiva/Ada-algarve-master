


<template>
  <div>
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div id="wrapper">
            <img src="../assets/images/hero-image-1.jpg" class="d-block w-100" alt="...">
            <div class="overlay"></div>
          </div>
          <div class="carousel-caption d-none d-md-block">
            <h5> slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>

        <div class="carousel-item ">
          <div id="wrapper">
            <img src="../assets/images/hero-image-2.jpg" class="d-block w-100" alt="...">
            <div class="overlay"></div>
          </div>
          <div class="carousel-caption d-none d-md-block">
            <h5>slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>

        <div class="carousel-item ">
          <div id="wrapper">
            <img src="../assets/images/hero-image-3.jpg" class="d-block w-100" alt="...">
            <div class="overlay"></div>
          </div>
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

  </div>
</template>

<script>


export default {
  components: {

  },
  name: "HeroContainer",
  props: {
    msg: String
  },
  data: function () {
    return {
      images: [
        "../assets/images/hero-image-1.jpg",
        "../assets/images/hero-image-2.jpg",
        "../assets/images/hero-image-3.jpg",


      ]
    };
  }
};
</script>
<style scoped>
#wrapper {
  position: relative;
}

.overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  z-index: 1;

}

img {
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-size: cover;
}

.carousel-item>div {


  height: 50%;
  display: flex;
  font-weight: 600;
  font-size: 45px;
  flex-direction: column;
  justify-content: center;
}


/* slide */
.slide {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.slide1 {
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../assets/images/hero-image-1.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.slide2 {
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../assets/images/hero-image-2.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>