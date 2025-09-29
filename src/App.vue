<script setup>
import Perfil from './components/Perfil.vue'
import SobreMim from './components/SobreMim.vue';
import Projetos from './components/Projetos.vue';
import Rodape from './components/Rodape.vue';


</script>

<template>

  <router-view />
    <Perfil />
    <SobreMim />
    <Projetos />
    <Rodape />

</template>



<style scoped>

</style>
