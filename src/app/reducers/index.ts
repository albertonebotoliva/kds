import { combineReducers } from 'redux';
import { RootState } from './state';
import { searchReducer } from './search';

export { RootState };

export const rootReducer = combineReducers<RootState>({
  search: searchReducer
});
