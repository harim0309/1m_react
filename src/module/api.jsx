const APIADD = 'api/APIADD'

export const apiAdd = (musicinput) => ({
    type: APIADD,
    musicinput : musicinput
});

const initialState = {
    title : '', // 기본값
  };

function api(state=initialState, action){
    switch (action.type) {
        case APIADD : 
        return {
            ...state,
            title: action.musicinput, // 변경할 state 값
        };
        default:
        return state;
    }
  }

  export default api;