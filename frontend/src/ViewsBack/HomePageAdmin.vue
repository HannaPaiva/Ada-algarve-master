
<template>
  <div>

    <NavBarAdmin />
    <ListBDAdmin />


  </div>
</template>

<style scoped></style>



<script>
import NavBarAdmin from '../components/componentsAdmin/NavBarAdmin.vue'

import ListBDAdmin from '../components/componentsAdmin/ListBDAdmin.vue'

export default {
  name: 'App',
  components: {

    NavBarAdmin,
    ListBDAdmin

  },

  data() {
    return {
      load: false
    }
  }
}
</script> 

<style></style>
  