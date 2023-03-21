
<template>
  <div>
   
    <NavBarAdmin/>

 
 
  </div>
</template>

<style scoped></style>



<script>
import NavBarAdmin from '../components/componentsAdmin/NavBarAdmin.vue'
import HeroContainer from '../components/HeroContainer.vue'
export default {
  name: 'App',
  components: {

    NavBarAdmin,
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
  