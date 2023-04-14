<template>
    <div class="container">
      <CardsPage :carsData="myCars"/>
   </div>
</template>

<script>

import getCarDJson from "@/json/turistuz.json"
import CardsPage from '@/components/cards/CardsPage.vue';
export default {
    // name:"CategoriesView",
    components:{
        CardsPage
    },
    data() {
    return {
      myCars : getCarDJson
    }
  },

}
</script>

<style scoped>
 

</style>