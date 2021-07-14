import React from 'react';
import { Grid } from '@material-ui/core';
import { RouteComponentProps } from 'react-router';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import { useSearchActions } from 'app/actions';
import { RootState } from 'app/reducers';
import { Selector, Search, DataTable, Dialog } from 'app/components';
import { SearchService } from 'app/services';
import { Dialog as TDialog } from 'app/models';

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
        searchActions.toggleIsFetching({ isFetching: true });
        const response = await SearchService.get(search.endpoint, search.query, search.page) || [];
        searchActions.setResponse({ response });
        searchActions.toggleIsFetching({ isFetching: false });
      })();
    }
  }, [search.query, search.page]);

  const setEndpoint = React.useCallback((e: React.SyntheticEvent<HTMLButtonElement>) => searchActions.setEndpoint({ endpoint: e.currentTarget.value }), []);
  const setQuery = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => searchActions.setQuery({ query: e.target.value }), []);
  const setPage = React.useCallback((e: React.ChangeEvent<HTMLInputElement>, page: number) => searchActions.setPage({ page: page + 1 }), []);
  const setDialog = React.useCallback((dialog: TDialog) => searchActions.setDialog({ dialog }), []);


  return (
    <Grid container spacing={0}>
      <Dialog
        dialog={search.dialog}
        setDialog={setDialog}
      />
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Selector
              items={search.selectors}
              loading={search.isFetching}
              onClick={setEndpoint}
            />
          </Grid>
          <Grid item xs={12}>
            <Search
              endpoint={search.endpoint}
              loading={search.isFetching}
              onChange={setQuery}
            />
          </Grid>
          <Grid item xs={12}>
            <DataTable
              data={search.response}
              loading={search.isFetching}
              page={search.page}
              setDialog={setDialog}
              onPageChange={setPage}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  );
};
