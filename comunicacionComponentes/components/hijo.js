Vue.component('hijo',{
    template:
    `
    <div class="py-5 bg-success">
        <h4>Hola soy el hijo {{ numero }}</h4>
    </div>
    `,
    props:['numero']
    //Con el props pasamos información.
});