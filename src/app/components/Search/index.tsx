import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputBase, Paper, Chip, CircularProgress } from '@material-ui/core';
import { useDebounceEvent } from 'app/hooks/useDebounce';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  chip: {
    marginRight: 5,
    borderRadius: 3,
    margin: 3,
    fontWeight: "bold",
    color: "white"
  }
}));

export namespace Search {
  export interface Props {
    endpoint: string,
    loading: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
}

export const Search = ({
  endpoint,
  loading,
  onChange
}: Search.Props): JSX.Element => {
  const classes = useStyles();
  const handleChange = useDebounceEvent(onChange);
  const preventDefault = (e: React.FormEvent<HTMLDivElement>) => e.preventDefault();
  return (
    <Paper component="form" onSubmit={preventDefault} className={classes.root}>
      <div>
        {<Chip color={"primary"} label={endpoint} className={classes.chip} />}
      </div>
      <InputBase
        disabled={loading}
        className={classes.input}
        placeholder="Search..."
        inputProps={{ 'aria-label': 'mainSearch' }}
        onChange={handleChange}
      />
      {loading && (<CircularProgress size={20} />)}
    </Paper>
  );
};
