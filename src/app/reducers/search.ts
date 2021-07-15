import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { SearchActions } from '../actions/search';
import { SearchModel } from '../models';

const initialState: RootState.SearchState = {
  selectors: [
    { id: 1, label: "films", uri: "films/" },
    { id: 2, label: "people", uri: "people/" },
    { id: 3, label: "planets", uri: "planets/" },
    { id: 4, label: "species", uri: "species/" },
    { id: 5, label: "starships", uri: "starships/" },
    { id: 6, label: "vehicles", uri: "vehicles/" }
  ],
  isFetching: false,
  endpoint: "films/",
  query: "",
  page: 1,
  response: {
    count: 0,
    next: null,
    previous: null,
    results: []
  },
  dialog: {
    open: false,
    result: null
  }
};

export const searchReducer = handleActions<RootState.SearchState, SearchModel>(
  {
    [SearchActions.Type.TOGGLE_IS_FETCHING]: (state, action) => {
      return {
        ...state,
        isFetching: action.payload.isFetching
      }
    },
    [SearchActions.Type.SET_ENDPOINT]: (state, action) => {
      return {
        ...state,
        endpoint: action.payload.endpoint,
        page: 1,
        response: {
          count: 0,
          next: null,
          previous: null,
          results: []
        }
      }
    },
    [SearchActions.Type.SET_QUERY]: (state, action) => {
      return {
        ...state,
        query: action.payload.query,
        page: 1,
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
    },
    [SearchActions.Type.SET_DIALOG]: (state, action) => {
      return {
        ...state,
        dialog: action.payload.dialog
      }
    }
  },
  initialState
);
