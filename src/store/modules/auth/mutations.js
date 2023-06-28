export default {
  setUser(state, payload){
    state.token = payload.tokenstate;
    state.userId = payload.userId;
  }
}