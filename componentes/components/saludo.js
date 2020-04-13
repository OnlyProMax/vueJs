Vue.component('saludo',{
    /* El comportamiento es el mismo que con fragment, tiene que devolver dentro de un elemento contenedor. */
    // Siempre va a estar dentro de un TEMPLATE.
    template:`
    <div>
        <h1> {{ saludo }}</h1>
        <h3> otro item en el template </h3>
    </div>
    `,
    data(){
        return{
            saludo: 'Hola desde VUE, componente.'
        }
    }
});