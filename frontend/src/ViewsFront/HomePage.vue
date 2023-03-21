
<template>
  <!-- <> -->
   <div>
    <NavBar/>
    <HeroContainer/>
    <AboutSection/>
    <h1>homepage</h1>
 
  </div>
</template>

<style scoped></style>



<script>
import NavBar from '../components/NavBar.vue'
import HeroContainer from '../components/HeroContainer.vue'
import AboutSection from '../components/AboutContainer.vue'
export default {
  name: 'App',
  components: {

    NavBar,
    HeroContainer,
    AboutSection

  },

  data() {
    return {
      load: false
    }
  }
}
</script> 

<style></style>
  