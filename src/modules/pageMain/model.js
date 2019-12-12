import { getFundData } from 'services/fundService'

export default {
  namespace: 'pageMainModel',
  state: {
    fundDatas: []
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
  },
  reducers: {
    refreshDatas(state, { payload }) {
      return {
        ...state,
        fundDatas: payload
      }
    },
  },
};
