import React from 'react';
// import style from './style.css';
import { Grid } from '@material-ui/core';
import { RouteComponentProps } from 'react-router';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import { useSearchActions } from 'app/actions';
import { RootState } from 'app/reducers';
// import { SearchModel } from 'app/models';
import { Selector, Search, DataTable } from 'app/components';
import { SearchService } from 'app/services';

export namespace App {
  export interface Props extends RouteComponentProps<void> { }
}

export const App = ({ history, location }: App.Props) => {
  const dispatch = useDispatch();
  const { search } = useSelector((state: RootState) => {
    return {
      search: state.search
    }
  });

  const searchActions = useSearchActions(dispatch);

  React.useEffect(() => {
    if (search.query) {
      (async () => {
        const response = await SearchService.get(search.endpoint, search.query, search.page) || [];
        searchActions.setResponse({ response });
      })();
    }
  }, [search.query, search.page]);

  const setEndpoint = React.useCallback((e: React.SyntheticEvent<HTMLButtonElement>) => searchActions.setEndpoint({ endpoint: e.currentTarget.value }), []);
  const setQuery = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => searchActions.setQuery({ query: e.target.value }), []);
  const setPage = React.useCallback((e: React.ChangeEvent<HTMLInputElement>, page: number) => searchActions.setPage({ page: page + 1 }), []);

  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Selector
              items={search.selectors}
              onClick={setEndpoint}
            />
          </Grid>
          <Grid item xs={12}>
            <Search
              endpoint={search.endpoint}
              onChange={setQuery}
            />
          </Grid>
          <Grid item xs={12}>
            <DataTable
              data={search.response}
              page={search.page}
              onPageChange={setPage}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
