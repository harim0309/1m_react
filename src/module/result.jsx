const RESULTADD = 'result/RESULTADD'

export const musicResult = (music) => ({
    type:RESULTADD,
    music:music,
});

const initialState = {
    musicID : '', // 기본값
  };

function result(state=initialState, action){
    switch (action.type) {
        case RESULTADD :
        return {
            ...state,
            musicID: action.musicID, // 변경할 state 값
        };
        default:
        return state;
    }
  }

  export default result;