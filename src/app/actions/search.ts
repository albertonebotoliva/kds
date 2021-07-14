import { useMemo } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { createAction } from 'redux-actions';
import { SearchModel } from 'app/models';

export namespace SearchActions {
  export enum Type {
    SET_ENDPOINT = 'SET_ENDPOINT',
    SET_RESPONSE = 'SET_RESPONSE',
    SET_QUERY = 'SET_QUERY',
  }

  export const setEndpoint = createAction<PartialPick<SearchModel, 'endpoint'>>(Type.SET_ENDPOINT);
  export const setResponse = createAction<PartialPick<SearchModel, 'response'>>(Type.SET_RESPONSE);
  export const setQuery = createAction<PartialPick<SearchModel, 'query'>>(Type.SET_QUERY);
}

export type SearchActions = Omit<typeof SearchActions, 'Type'>;
export const useSearchActions = (dispatch: Dispatch) => {
  const { Type, ...actions } = SearchActions;
  return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch]) as SearchActions;
};