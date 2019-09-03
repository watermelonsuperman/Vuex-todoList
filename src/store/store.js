import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        allThings:[],
        toDoList:[],
        doneList:[]
    },
    getters:{
        getAllThings(){
            return state.allThings;
        }
    },
    mutations:{
        add:function(state,thing){
            state.allThings.push(thing);
        },
        remove:function(state,thing){
            
        }

    }
})

export default store;