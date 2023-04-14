<template>
 <div>
    <div class="footer">
    <div class="flex container">
        <div>
            <a href="#">
                <img class="log-footer" src="@/assets/fileimg/logo.svg" alt="">
            </a>
        </div>
        <div>
            <ul>
                <li class="title">Туристу</li>
                <li><a href="#">Документы</a></li>
                <li><a href="#">Виза</a></li>
                <li><a href="#">Отели Узбекистана</a></li>
                <li><a href="#">Транспорт в туре</a></li>
                <li><a href="#">Памятка туристу</a></li>
                <li><a href="#">О стране</a></li>
            </ul>
        </div>
        <div>
            <ul>
                <li><a href="#">MICE и коропоративный туризм</a></li>
                <li><a href="#">Вопросы и ответы</a></li>
                <li><a href="#">Достопримечательности</a></li>
                <li><a href="#">Как заказать и оплатить тур</a></li>
                <li><a href="#">Оплата</a></li>
            </ul>
        </div>
        <div>
            <ul>
                <li class="title">Контакты</li>
                <li><i class="icons fa-regular fa-mobile"></i> <a href="#">+7 918 450 77 88</a> </li>
                <li><i class="icons fa-light fa-comment-lines"></i> <a href="#"> djuraeva@bk.ru</a></li>

                <li><i class="icons fa-light fa-location-dot"></i> <a href="#">Узбекистан, г. Бухара,
улица Бахауддина Накшбанди, д. 152</a> </li>

                <li><i class="icons fa-regular fa-mobile"></i><a href="#"> Пн-Вс - 9:00-20:00</a> </li>

            </ul>
        </div>
    </div>
   </div>

   <div class="green">
       <div>Лицензия №726872672372392311</div>
       <div>Сделано в
nx marketing</div>
   </div>
 </div>
</template>

<script>

</script>


<style lang="scss">
.phoen {
    font-size: 34px;
    color: white;
}
.icons {
    color: white;
}
.flex {
   min-height: 300px;
    display: flex;
    padding-top: 80px;
    justify-content: space-between;
    align-items: start;
    // gap: 60px;
    font-size: 15px;
}  

.green {
    display: flex;
    align-items: center;
    padding: 25px 140px;
    justify-content: space-between;
    background-color: rgb(4, 81, 4);
    color: white;
}
.footer {
    padding: 50px;
    background: #0e232e;
}
.title {
    font-size: 24px;
}
.log-footer {
    width: 120px;
    font-size: 10px;
}
ul {
    li {
        list-style: none;
        margin-top: 20px;
        color: white;
        a {
            color: white;
            text-decoration: none;
            margin-left: 10px;
        }
    }
}
</style>