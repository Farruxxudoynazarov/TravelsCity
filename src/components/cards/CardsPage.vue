<template>
    <div class="container">
        <h1>Наши туры в Узбекистан</h1>
        <p>Мы подготовили для Вас насыщенные программы, которые охватывают все знаковые места. Вас ждёт гид, погружение в историю и знакомство с местными традициями.</p>
               <div class="turistCard">
                <div class="card" v-for="(eachCar, i) in carsInfo" :key="i">
                    <div class="card-img">
                        <img :src="getImgUrl(eachCar.file, eachCar.mainImg)" class="imgCrad" alt="">
                       <div class="hoverBlack">
                    <h3>{{ eachCar.defaultext }}</h3>
                
                    <h4 class="morelink">
                       <router-link :to="{
                        name: 'CityInfo',
                        params: {carName: eachCar.name}
                        
                        }">
                        {{ eachCar.morelink }}
                       </router-link> 
                    </h4>
                      
                </div>
                    </div>
            <div class="Cardtitle">
                 <p><i class="sandTime fa-sharp fa-solid fa-hourglass-half"></i> {{ eachCar.days }}</p>

                 <p><i class="sandTime fa-sharp fa-solid fa-map-location-dot"></i> {{ eachCar.location }} </p>
            </div>
         </div> 
               </div>
   </div>
</template>


<script>

export default {
//   name: 'Home',
  data() {
    return {
        carsInfo:this.$attrs.carsData
    }
  },
  methods: {
    getImgUrl(folderName, imageName) {
        let image = require.context('@/assets/');
        return image('./'+folderName+'/'+imageName)
    }
  }
  
}
</script>


<style>
.hoverBlack {
    width: 100%;
    height: 40%;
    position: absolute;
    left: 0;
    bottom: 1px;
    box-sizing: border-box;
    background: rgba(0,0,0,0.4);
    border-radius: 0 0 1px 1px;
    color: white;
    padding: 15px;
}
.sandTime {
    color: coral;
    font-size: 22px;
    margin-right: 10px;
}

.turistCard {
    display: flex;
    margin: 0 -7px;
    flex-wrap: wrap;
}
.turistCard:hover .imgCrad {
    cursor: pointer;
}
.card {
    /* margin-top: 30px; */
     width: 286px; 
    height: 462x; 
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      /* cursor: pointer; */
    /* border: 1px solid black; */
    margin: 50px 7px 22px;
}
.morelink {
    color: coral;
    width: 108px;
    margin-top: 70%;
    display: none;
    border-bottom: 1px dotted coral;
}
.morelink:hover {
    color: white;
    width: 108px;
    cursor: pointer;
    border-bottom: 1px dotted rgb(255, 255, 255);
}
.card:hover .hoverBlack {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 1px;
    box-sizing: border-box;
    background: rgba(0,0,0,0.7);
    border-radius: 0 0 1px 1px;
    color: white;
    padding: 15px;
}
.card:hover .morelink {
    display: block;
}
.Cardtitle {
    padding: 10px;
}

.card-img {
    position: relative;
}
</style>