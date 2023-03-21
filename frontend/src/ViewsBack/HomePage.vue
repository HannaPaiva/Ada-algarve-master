
<template>
  <div>
   
    <NavBar/>
    <HeroContainer/>
    <h1>homepage</h1>
 
  </div>
</template>

<style scoped></style>



<script>
import NavBar from '../components/NavBar.vue'
import HeroContainer from '../components/HeroContainer.vue'
export default {
  name: 'App',
  components: {

    NavBar,
    HeroContainer

  },

  data() {
    return {
      load: false
    }
  }
}
</script> 

<style></style>
  