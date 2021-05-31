/**
 * state는 여러 개를 둘 수 있다.
 * 예를 들면, 사용자에 관한 데이터는 사용자 모듈, 게시글에 관한 데이터는 게시글 모듈에만 모아두는 식으로 데이터 분리를 할수 있음
 */
export const state = () => ({
  me: null, // 로그인 여부 확인
});

/**
 * mutations : 단순 동기작업
 * mutations를 통해 state를 변경 할 수 있다.
 * mutations는 비동기 작업(setTimeout, new Promise, xhr나 axios 같은 ajax요청 등)이 있으면 안된다.
 * 따라서 비동기 작업을 위한 actions가 존재함
 */
export const mutations = {
  setMe(state, payload) {
    state.me = payload;
  },
};

/**
  * actions : 복잡한 비동기 작업  
  * context는 객체이고, 이 안에는 {commit, dispatch, rootState, getter, rootGetters 등등} 가 있다. console.log(context); 해보면 알 수 있음
  * commit : mutations를 실행 
  * dispatch : actions를 실행
  * actions안에서 mutations를 실행 할 수도 있고, 또 다른 actions를 실행 할 수도 있고, state를 바꾸거나, getters를 사용하는 것 등이 가능하다.
  */
export const actions = {
  signUp(context, payload){
    // 서버에 회원 가입 요청을 보내는 부분
    // 요청에 대한 응답이 오면 me의 상태(state)를 변경
    commit('setMe', payload);
  },
  logIn({ commit }, payload) {
    commit('setMe', payload);
  },
  logOut({ commit }, payload) {
    commit('setMe', null);
  },
}