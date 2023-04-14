<template>
    <div class="container">
        <div class="row1">
            <div>
                <h1 class="cityName">{{carName  }}</h1>
                <img src="@/assets/imgs/card6.jpg" alt="">
            </div>
            <div>
                <h3 class="titilt">Тур в Узбекистан «Кулинарные секреты Ходжи Насреддина»</h3>
            <div class="header__content">
                <div>
                     <h4>Направление:</h4>
                     <h4>Продолжительность:</h4>
                     <h4>Маршрут:</h4>
                </div>
                <div class="left">
                    <p>Узбекистан</p>
                    <p>	7 дней</p>
                    <p>	Москва - Ташкент – Самарканд – Бухара – Москва</p>
                
  
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import getCarInfo from '@/json/turistuz.json'
export default{
name:'CityInfo',
data() {
    return {
        myCarDetail: getCarInfo,
        carName: this.$route.params.carName
    }
 },
}

</script>

<style>
.row1 {
    display: flex;
    align-items: center;
    padding: 50px;
}
.header__content {
 display: flex;
 padding: 100px;
 align-items: start;
}
.left {
    padding-left: 50px;
}
.titilt {
    font-size: 30px;
    padding-left: 50px;
}
.cityName {
    font-size: 30px;
}
</style>