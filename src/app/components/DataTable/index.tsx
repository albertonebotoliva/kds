import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } from '@material-ui/core';
import { APIResponse, Dialog as TDialog } from '../../models';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650
  },
  pointer: {
    cursor: "pointer"
  }
}));

export namespace DataTable {
  export interface Props {
    data: APIResponse,
    loading: boolean,
    page: number,
    setDialog: (dialog: TDialog) => any,
    onPageChange: (e: any, page: number) => void
  }
}

export const DataTable = ({
  data,
  loading,
  page,
  setDialog,
  onPageChange
}: DataTable.Props): JSX.Element | null => {
  const classes = useStyles();

  if (data.results?.length <= 0) {
    return null;
  }

  const headers = Object.keys(data.results[0]);
  const contents = Object.values(data.results);
  const disablePagination = (e: any, page: number) => e.preventDefault();

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {headers.slice(0, 5).map((header, index) => (
                <TableCell key={index}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {contents.map((content: any, index: number) => (
              <TableRow
                hover
                key={index}
                role={!index ? "tablerow" : ""}
                id={"index"}
                className={classes.pointer}
                onClick={() => setDialog({ open: true, result: content })}
              >
                {Object.values(content).slice(0, 5).map((value: any, i: number) => (
                  <TableCell key={i} component="th" scope="row">{value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={data.count}
        rowsPerPage={10}
        page={page - 1}
        onPageChange={loading ? disablePagination : onPageChange}
      />
    </>
  );
};
