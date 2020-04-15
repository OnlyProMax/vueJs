<template>
    <div>
        <h1>Galeria de fotos</h1>
        <router-link :to="{ name: 'fotos', params: { id: item} }" v-for="(item, index) of fotosArreglo" :key="index"><!-- Rutas dinamicas -->    
        <!-- En el to pasamos un objeto, fotos es el nombre de la ruta y el parametro id. -->
        <button>Foto {{ item }} </button>
        </router-link>
        <Foto />
        <button @click="anterior">Anterior</button>
        <button @click="home">Home</button>
        <button @click="siguiente">Siguiente</button>
    </div>
</template>
<script>
import Foto from '@/components/Fotografia.vue';

export default {
    name: 'Fotos',
    components:{
        Foto
    },
    data(){
        return{
            fotosArreglo:[1,2,3]
        }
    },
    methods:{
        home(){
            this.$router.push('/') /* Así tiene el path la ruta HOME */
        },
        anterior(){
            this.$router.go(-1) /* Función para ir a la página anterior */
        },
        siguiente(){
            this.$router.go(1) /* Función para ir a la página siguiente, de las que tenemos en nuestro arreglo. */
        }
    }
}
</script>