import { combineReducers } from 'redux';
import pageMain from './components/pageMain/reducers';
import pageReader from './components/pageReader/reducers';

const reducer = combineReducers({
  pageMain,
  pageReader,
});

export default reducer;
