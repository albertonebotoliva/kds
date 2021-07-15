import { SearchModel } from 'app/models';

export interface RootState {
  search: RootState.SearchState;
  router?: any;
}

export namespace RootState {
  export type SearchState = SearchModel;
}
