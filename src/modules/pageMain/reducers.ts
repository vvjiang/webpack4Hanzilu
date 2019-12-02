import { handleActions } from 'redux-actions';
import * as T from './actionTypes';


export interface DataItems {
  netValueDate: string;
  netValue: string;
  totalNetValue: string;
  dayOfGrowth: string;
}

export interface PageMainReduxState {
  dataList: DataItems[]
}

export interface returnTypes {
  FSRQ: string;
  DWJZ: string;
  LJJZ: string;
  JZZZL: string;
}

const initialState: PageMainReduxState = {
  dataList: []
};

const pageMainReducer = handleActions({
  [T.GET_DATA_LIST]:
  {
    next(state, action: any) {
      if (!action.payload.data.Data) {
        return {
          // ...state, // 此处使用展开操作符存在问题，不明原因，暂时搁置
          dataList: []
        }
      }
      return {
        dataList: action.payload.data.Data.LSJZList.reverse().map((l: returnTypes) => ({
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
