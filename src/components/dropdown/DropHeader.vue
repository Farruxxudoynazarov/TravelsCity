<template>
    <div class="drop-item">
             <div class="drop-header" v-for="accardion in accardions" :key="accardion.header" :title="accardion.content">
                {{ accardion.header }}
             </div>
             
    </div>
</template>


<script>
export default {
   data() {

   }
}

</script>
<style>
.drop-item {
    border-radius: 8px;
    overflow: hidden;
}
.drop-header {
    padding: 15px;
    background-color: teal;
    color: antiquewhite;
    font-weight: bold;

}

.drop-content {
    padding: 15px;
    font-size: 18px;
    border: 1px solid #000;
}

</style>