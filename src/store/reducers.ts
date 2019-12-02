import { combineReducers } from 'redux';
import pageMain, { PageMainReduxState } from '../modules/pageMain/reducers';

export interface PageReduxState {
  pageMain: PageMainReduxState
}

const reducer = combineReducers({
  pageMain
});

export default reducer;
