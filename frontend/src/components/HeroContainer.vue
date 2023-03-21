<template>
  <div>
   

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
<style >
img {
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-size:cover;
}


.hero-slider .carousel-control-prev,
.hero-slider .carousel-control-nex {
  background-color: rgba(255, 255, 255, 0.3) !important;
  width: 60px !important;
  height: 60px !important;
  display: block;
  display: grid;
  place-items: center;
  color: #fff !important;
  border-radius: 100px;
  line-height: 0;
  border-radius: 100px !important;
  position: absolute;
  top: 50%;
  font-weight: 600 !important;
  font-size: 12px !important;
  transition: all 0.4s ease;
  margin-top: -30px !important;
}

.owl-prev {
  left: 0;
}

.owl-next {
  right: 0;
}

.hero-slider .owl-prev:hover,
.hero-slider .owl-next:hover {
  background-color: var(--brand) !important;
}

.owl-dot.active span {
  background-color: var(--brand) !important;
}


/* slide */
.slide {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
</style>