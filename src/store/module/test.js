const state = {
  number: 1
};
const actions = {
    onePlusAsync({commit},payload){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                commit('onePlus',payload);  
                resolve()  
            },1500)
        })
    }
};
const mutations = {
    onePlus(state,payload){
        state.number = state.number+payload
    }
}
export default {
    namespaced:true,
    state,
    actions,
    mutations
}