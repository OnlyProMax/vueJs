<template>
    <div>
        <ul class="list-group">
            <li 
                v-for="(fruta, index) of frutas"
                :key="[fruta.id]" 
                @click="aumentar(index)"
                class="list-group-item d-flex justify-content-between align-items-center"
            ><!-- Tenemos que agregar el key, porque nos tira error. Esto es para decir que los elementos son únicos. -->
                {{ index }} {{ fruta.nombre }}
                <span class="badge badge-primary badge-pill">{{ fruta.cantidad }}</span>
            </li>
            <button @click="reiniciar" class="btn btn-success text-center mt-3"> Reiniciar </button>
        </ul>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';

export default {
    name: 'Lista',
    computed: {
        ...mapState(['frutas'])
    },
    methods:{
        ...mapMutations(['aumentar', 'reiniciar'])
    }
}
</script>