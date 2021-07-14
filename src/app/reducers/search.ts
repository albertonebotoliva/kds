import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { SearchActions } from 'app/actions/search';
import { SearchModel } from 'app/models';

const initialState: RootState.SearchState = {
  selectors: [
    { id: 1, label: "films", uri: "films/" },
    { id: 2, label: "people", uri: "people/" },
    { id: 3, label: "planets", uri: "planets/" },
    { id: 4, label: "species", uri: "species/" },
    { id: 5, label: "starships", uri: "starships/" },
    { id: 6, label: "vehicles", uri: "vehicles/" }
  ],
  endpoint: "films/",
  query: "",
  page: 1,
  response: {
    count: 0,
    next: null,
    previous: null,
    results: []
  }
};

export const searchReducer = handleActions<RootState.SearchState, SearchModel>(
  {
    [SearchActions.Type.SET_ENDPOINT]: (state, action) => {
      return {
        ...state,
        endpoint: action.payload.endpoint,
        page: 1
      }
    },
    [SearchActions.Type.SET_QUERY]: (state, action) => {
      return {
        ...state,
        query: action.payload.query,
        response: {
          count: 0,
          next: null,
          previous: null,
          results: []
        }
      }
    },
    [SearchActions.Type.SET_PAGE]: (state, action) => {
      return {
        ...state,
        page: action.payload.page
      }
    },
    [SearchActions.Type.SET_RESPONSE]: (state, action) => {
      return {
        ...state,
        response: action.payload.response
      }
    }
  },
  initialState
);
