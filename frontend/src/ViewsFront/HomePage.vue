
<template>
  <!-- <> -->
   <div>
    <NavBar/>
    <HeroContainer/>
    <AboutSection/>
    <ServicesSection/>
    <TeamSection/> 
    <FooterContainer/>

  </div>
</template>

<style scoped></style>



<script>
import NavBar from '../components/NavBar.vue'
import HeroContainer from '../components/HeroContainer.vue'
import AboutSection from '../components/AboutContainer.vue'
import ServicesSection from '../components/ServicesSection.vue'
import TeamSection from '../components/TeamSection.vue'
import FooterContainer from '../components/FooterContainer.vue'
export default {
  name: 'App',
  components: {

    NavBar,
    HeroContainer,
    AboutSection,
    ServicesSection,
    TeamSection,
    FooterContainer,


  },

  data() {
    return {
      load: false
    }
  }
}
</script> 

<style></style>
  