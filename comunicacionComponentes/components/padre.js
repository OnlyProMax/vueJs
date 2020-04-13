Vue.component('padre',{
    template:`
    <div class="p-5 bg-dark text-white">
        <h1>Hola soy el padre: {{ numeroPadre }}</h1>
        <button @click="numeroPadre" class="btn btn-danger"></button>
        <hijo :numero="numeroPadre"></hijo>
    </div>
    `,
    data(){
        return{
            numeroPadre: 0
        }
    }
});
/*
Los props nos permiten mandas información entre nuestros componentes.
==============
El número acá es el mismo número que generamos en el componente hijo, por lo que
haciendo el contador, vamos a estar modificando componente padre e hijo.

numeroHijo = numeroPadre

*/