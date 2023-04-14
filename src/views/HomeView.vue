<template>
 <div>
  <div class="home">
     <!-- <MainMenu /> -->
     <div>
      <a href="#">
        <img class="logotip" src="@/assets/fileimg/logo.svg" alt="">
      </a>
      <div class="h1">Туры по Узбекистану</div>
     </div>
  </div>


  <div class="container">
    <FormPage/>
    <CardsPage :carsData="myCars"/>
  </div>
  <GreenBoard/>
  <DropHeader/>z
</div>
</template>

<script>
// @ is an alias to /src
import getCarDJson from "@/json/turistuz.json"
import FormPage from '@/components/form/FormTime.vue'
import CardsPage from '@/components/cards/CardsPage.vue'


import GreenBoard from "@/components/greenBoard/GreenBoard.vue"
import DropHeader from "@/components/dropdown/DropHeader.vue"
export default {
  name: 'HomeView',

  data() {
    return {
      myCars : getCarDJson
    }
  },

  components: {
    FormPage,
    CardsPage,
    GreenBoard,
    DropHeader
 
  }
}
</script>

<style>
 .home {
  background: linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.20)), url('../assets/fileimg/header--page-title.jpg');
  /* background-image: url('../assets/fileimg/header--page-title.jpg'); */
  background-repeat: no-repeat;
  background-position: center center;
  width:100%;
  height: 69vh; 
}
.logotip {
  padding-top: 30px;
  /* text-align: center; */
  margin:0px auto;
  display: block;
}
.h1 {
    font-weight: 900;
    font-size: 52px;
    line-height: 55px;
    text-align: center;
    margin-top: 50px;
    color: white;
  }

</style>
