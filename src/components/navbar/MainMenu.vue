<template>
  <div>
     <header class="header__page">
      <div class="header">
       <ul class="header__nav">
            <select name="" id="">
              <option value="rus">Rus</option>
              <option value="eng">Eng</option>
              <option value="rger">Ger</option>
              <option value="uzb">Uzb</option>
            </select>
           <router-link tag="li" :to="{name:'Home'}">
            <a class="link">
              <img src="@/assets/fileimg/logo-black.svg" alt="">
            </a>
           </router-link>
           <router-link tag="li" :to="{name:'Categories'}">
            <a class="link">Shaharlar</a>
           </router-link>
           <router-link tag="li" :to="{name:'Turisfor'}">
            <a class="link">Sayyohlar uchun</a>
           </router-link>
           <router-link tag="li" :to="{name:'About'}">
              <a class="link">Diqqatga sazovor joylar</a>
           </router-link>
           <router-link tag="li" :to="{name:'Contact'}">
              <a class="link">Тurist</a>
           </router-link>
       </ul>
       <div class="contacts">
           <div>
            <a href="tel:+998888888888" class="contacts__phone">
              <i class="fa-light fa-mobile"></i>
              +99888888888</a>
           </div>
           <div>
            <a href="">Заказать звонок</a>
            <div class="icons-link">
               <div class="icondiv">
                <i class="icons fa-brands fa-twitter"></i>
               </div>
               
               <div class="icondiv">
                <i class="icons fa-brands fa-instagram"></i>
               </div>

               <div class="icondiv">
                <i class="icons fa-brands fa-facebook"></i>
               </div>
              
               <div class="icondiv">
                <i class="icons fa-brands fa-telegram"></i>
               </div>             
            </div>
           </div>
       </div>
    </div>
    </header>
  </div>
</template>


<script>
export default {
    name: 'MainMenu'
}

</script>


<style lang="scss" scoped>

.bgf {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  border: 1px solid black;
  .header__nav, .contacts {
    display: flex;
    gap: 40px;
    align-items: center;
  }
}
.link {
  color: rgb(0, 0, 0);
  transition: .3s;
}

.link:hover {
  display: block;
    color: coral;
    // border-bottom: 1px dotted coral;
}
  li {
    display: inline-block;
    padding: 10px;
    margin: 0 1px;
    list-style: none;
    a {
      text-decoration: none;
      color: #4f4f60;
      font-weight: bold;
      transition: .3s;

      i {
        font-size: small;
      }

    }
  }
  a:hover {
    display: block;
    color: coral;
    // border-bottom: 1px dotted coral;

    // line-height: 24px;
    // border-bottom: 3px solid #4c4f60;
  }
  li.router-link-exact-active {
    color: coral;
    border-bottom: 1px dotted coral;

    // border-bottom: 3px solid #4c4f60;
  a {
    color: rgb(0, 0, 0);
  }
  }

  .contacts {
    a {
      color: rgb(0, 0, 0);
      text-decoration: none;
      transition: .3s;

    }
    a:hover {
      display: block;
    color: coral;
    border-bottom: 1px dotted coral;
    }
  }
  .icons-link {
    border-top: 1px solid rgb(0, 0, 0);
    // padding-bottom: 10px;
    display: flex;
    i {
      margin-left: 5px;
      cursor: pointer;
      transition: .5s;
      color: rgb(0, 0, 0);
    }
    // padding-top: 10px;
    i:hover  {
      color: coral;

    }
     
  }
  .icons {
    margin: 10px 5px;
  }
  .linksicons:hover {
    // border: none;
    border-bottom: none;
  }

  .icondiv {
    margin:0px 5px -10px 5px;
  }
 
</style>