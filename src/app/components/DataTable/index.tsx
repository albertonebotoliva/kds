import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } from '@material-ui/core';
import { APIResponse } from 'app/models';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650
  }
}));

export namespace DataTable {
  export interface Props {
    data: APIResponse,
    page: number,
    onPageChange: (e: any, page: number) => void
  }
}

export const DataTable = ({
  data,
  page,
  onPageChange
}: DataTable.Props): JSX.Element | null => {
  const classes = useStyles();

  if (data.results?.length <= 0) {
    return null;
  }
  {/* //TODO: Create Parser by type */ }
  const headers = Object.keys(data.results[0]);
  const contents = Object.values(data.results);

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {headers.slice(0, 5).map(header => (
                <TableCell>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {contents
              .map((content: any, index: number) => (
                <TableRow key={index}>
                  {Object.values(content).slice(0, 5).map((value: any) => (
                    <TableCell component="th" scope="row">{value}</TableCell>
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
        onPageChange={onPageChange}
      />
    </>
  );
};
