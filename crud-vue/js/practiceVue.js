/* 
1 - Instanciamos Vue.
*/

const app = new Vue ({
    /*
    Toma de datos con VUE

    el: '#app', //Acá decimo que dentro de app, va a estar gestionado con VUE
    data: { //Los datos se manejan con DATA.
        titulo: 'Hola mundo con Vue',
            frutas: [ 'Manzana', 'Pera', 'Banana' ],  
        frutas: [
            { nombre: 'Pera', cantidad: 1 },
            { nombre: 'Manzana', cantidad: 10 },
            { nombre: 'Lechuga', cantidad: 5 },
            { nombre: 'Remolacha', cantidad: 0 }    
        ],
        nuevaFruta: '',
        total: 0   
    },
    methods:{ Palabra reservada 
        agregarFruta(){
            this.frutas.push({
                nombre: this.nuevaFruta,
                cantidad: 0
            });
            this.nuevaFruta = ''
        }
    },
    computed:{  Palabra reservada 
        sumarFrutas(){
            this.total = 0;
            for ( fruta of this.frutas ){
                this.total += fruta.cantidad;
            }
            return this.total;
        }
    }
    */

    /*================================*/

    /*
    el: '#app',
    data: {
        fondo: 'bg-warning',
        color: false
    },
    methods:{

    }
    */

    /*================================*/

    el: '#app',
    data: {
        titulo: 'Gym con Vue',
        tareas: [],
        nuevaTarea: '' 
    },
    methods:{
        agregarTarea: function(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            this.nuevaTarea = '';
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
        editarTarea: function(index){
            this.tareas[index].estado = true;
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
        eliminar: function(index){
            this.tareas.splice(index, 1);
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        }
    },
    created: function(){
        let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
        if( datosDB === null ){
            this.tareas = [];
        }else{
            this.tareas = datosDB;
        }
        
    }
});