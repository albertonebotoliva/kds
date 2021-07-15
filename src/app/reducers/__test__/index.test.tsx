import { searchReducer } from '../search';
import { RootState } from '../state';
const mockFilms = require('./../../services/mockFilms.json');

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

describe('Reducer', () => {
    test('toggleIsFetching', () => {
        const state = searchReducer(initialState, { type: "TOGGLE_IS_FETCHING", payload: { ...initialState, isFetching: true } })
        expect(state.isFetching).toBe(true);
    });
    test('setEndpoint', () => {
        const state = searchReducer(initialState, { type: "SET_ENDPOINT", payload: { ...initialState, endpoint: "test/" } })
        expect(state.endpoint).toBe('test/');
    });
    test('setResponse', () => {
        const state = searchReducer(initialState, {
            type: "SET_RESPONSE", payload: {
                ...initialState,
                response: mockFilms
            }
        })
        expect(state.response.results.length).toBe(mockFilms.results.length);
    });
    test('setPage', () => {
        const state = searchReducer(initialState, { type: "SET_PAGE", payload: { ...initialState, page: 100 } })
        expect(state.page).toBe(100);
    });
    test('setQuery', () => {
        const state = searchReducer(initialState, { type: "SET_QUERY", payload: { ...initialState, query: "LUKE" } })
        expect(state.query).toBe('LUKE');
    });
    test('setDialog', () => {
        const state = searchReducer(initialState, {
            type: "SET_DIALOG", payload: {
                ...initialState,
                dialog: {
                    open: true,
                    result: null
                }
            }
        })
        expect(state.dialog.open).toBe(true);
    });
})