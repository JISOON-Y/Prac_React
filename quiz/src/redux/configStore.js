import { legacy_createStore as createStore, combineReducers } from 'redux';
import quiz from './modules/quiz';
import user from './modules/user';

// 리듀서 묶어주기
const rootReducer = combineReducers({ quiz, user });

// 스토어 생성
const store = createStore(rootReducer);

export default store;