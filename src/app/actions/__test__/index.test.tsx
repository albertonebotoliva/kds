import { SearchActions } from '..';

describe('Actions', () => {
    test('toggleIsFetching', () => {
        const action = SearchActions.toggleIsFetching({ isFetching: true });
        expect(JSON.stringify(action)).toBe("{\"type\":\"TOGGLE_IS_FETCHING\",\"payload\":{\"isFetching\":true}}");
    });
    test('setEndpoint', () => {
        const action = SearchActions.setEndpoint({ endpoint: "films/" });
        expect(JSON.stringify(action)).toBe("{\"type\":\"SET_ENDPOINT\",\"payload\":{\"endpoint\":\"films/\"}}");
    });
    test('setResponse', () => {
        const action = SearchActions.setResponse({ response: { count: 0, next: null, previous: null, results: [] } });
        expect(JSON.stringify(action)).toBe("{\"type\":\"SET_RESPONSE\",\"payload\":{\"response\":{\"count\":0,\"next\":null,\"previous\":null,\"results\":[]}}}");
    });
    test('setPage', () => {
        const action = SearchActions.setPage({ page: 1 });
        expect(JSON.stringify(action)).toBe("{\"type\":\"SET_PAGE\",\"payload\":{\"page\":1}}");
    });
    test('setQuery', () => {
        const action = SearchActions.setQuery({ query: "LUKE" });
        expect(JSON.stringify(action)).toBe("{\"type\":\"SET_QUERY\",\"payload\":{\"query\":\"LUKE\"}}");
    });
    test('setDialog', () => {
        const action = SearchActions.setDialog({ dialog: { open: true, result: {} } });
        expect(JSON.stringify(action)).toBe("{\"type\":\"SET_DIALOG\",\"payload\":{\"dialog\":{\"open\":true,\"result\":{}}}}");
    });
})