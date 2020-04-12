const app = new Vue ({ /* Cuando creamos VUE, esta es la primer instancia y se la llama - beforeCreate -  */
    el: '#app', //ESTE ES 'EL'
    data:{
        title: 'Soy un ciclo de vida'
    },
    beforeCreate(){ /* Esto se crea antes de Vue */
        console.log('beforeCreate');
    },
    created(){
        /*
        Al crear los métodos, observadores y eventos, pero aún no accede al DOM.
        - Aún no se puede acceder a 'el'.
        */
       console.log('created');
    },
    mounted(){
        //Se ejecuta al insertar al dom
        console.log('mounted');
    },
    beforeUpdate(){
        //Al detectar un cambio
        console.log('before update');     
    },
    updated(){
        //Al realizar los cambios
        console.log('updated');
    },
    beforeDestroy(){
        //Antes de destruir la instancia
        console.log('beforeDestroy');
    },
    destroyed(){
        //Cuando se destruye la instancia
        console.log('destroyed');
    },
    methods: {
        destruir(){
            this.$destroy();
        }
    }
});