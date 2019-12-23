import { getFundData, getFunds } from 'services/fundService'

export default {
  namespace: 'pageMainModel',
  state: {
    fundDatas: [],
    funds: [] // 所有基金的信息
  },
  effects: {
    *getDatas({ payload }, { call, put }) {
      const { data } = yield call(getFundData, payload);
      const fundDatas = data.Data.LSJZList.reverse().map((l) => ({
        netValueDate: l.FSRQ,
        netValue: l.DWJZ,
        totalNetValue: l.LJJZ,
        dayOfGrowth: l.JZZZL
      }))
      yield put({ type: 'refreshDatas', payload: fundDatas });
    },
    *getFunds({ payload }, { call, put }) {
      const { data } = yield call(getFunds, payload);
      yield put({ type: 'refreshFunds', payload: data });
    },
  },
  reducers: {
    refreshDatas(state, { payload }) {
      return {
        ...state,
        fundDatas: payload
      }
    },
    refreshFunds(state, { payload }) {
      return {
        ...state,
        funds: payload
      }
    },
  },
};
