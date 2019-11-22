import { handleActions } from 'redux-actions';
import * as T from './actionTypes';


const initialState = {
  dataList: []
};

const pageMainReducer = handleActions({
  [T.GET_DATA_LIST]:
  {
    next(state, action) {
      if (!action.payload.data.Data) {
        return {
          ...state,
          dataList: []
        }
      }
      return {
        ...state,
        dataList: action.payload.data.Data.LSJZList.reverse().map(l => ({
          netValueDate: l.FSRQ,
          netValue: l.DWJZ,
          totalNetValue: l.LJJZ,
          dayOfGrowth: l.JZZZL
        }))
      }
    },
    throw(state) {
      return state;
    },
  }
}, initialState);

export default pageMainReducer;
