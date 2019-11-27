const state = {
    number1: 1111
  };
  const actions = {
      onePlusAsync1({commit},payload){
          return new Promise((resolve,reject)=>{
              setTimeout(()=>{
                  commit('onePlus1',payload);  
                  resolve()  
              },1500)
          })
      }
  };
  const mutations = {
      onePlus1(state,payload){
          state.number = state.number+payload
      }
  }
  export default {
      namespaced:true,
      state,
      actions,
      mutations
  }