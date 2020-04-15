import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas: [
      { nombre: 'Manzana', cantidad: 0 },
      { nombre: 'Pera', cantidad: 1 },
      { nombre: 'Naranja', cantidad: 2 }
    ]
  },
  mutations: {
    aumentar( state, index ){
      state.frutas[index].cantidad++
    },
    reiniciar( state ){
      state.frutas.forEach( i =>{
        i.cantidad = 0
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
