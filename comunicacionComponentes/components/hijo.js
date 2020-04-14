Vue.component('hijo',{
    template:
    `
    <div class="py-5 bg-success">
        <h4>Hola soy el hijo {{ numero }}</h4>
        <h4>Nombre: {{ padre }}</h4>
    </div>
    `,
    props:['numero'],
    //Con el props pasamos información.
    //Como estamos creando un dato local, tenemos que hacer un data
    data(){
        return{
            nombre: 'Soy el componente padre, viajando desde el hijo.'
        }
    },
    mounted(){ //Se ejecuta luego del template.
        this.$emit('nombreHijo', this.nombre);
    }
});