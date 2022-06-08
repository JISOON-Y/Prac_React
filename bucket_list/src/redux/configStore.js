import { legacy_createStore as createStore, combineReducers } from 'redux';
import bucket from './modules/bucket';

// 리듀서들 묶어주기
const rootReducer = combineReducers({ bucket });

// 스토어 생성
const store = createStore(rootReducer);

export default store;