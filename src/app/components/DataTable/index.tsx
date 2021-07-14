import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } from '@material-ui/core';
import { ValidResults } from 'app/models';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650
  }
}));

export namespace DataTable {
  export interface Props {
    results: ValidResults
  }
}

export const DataTable = ({
  results
}: DataTable.Props): JSX.Element | null => {
  const classes = useStyles();

  if (results.length <= 0) {
    return null;
  }
  {/* //TODO: Create Parser by type */ }

  const headers = Object.keys(results[0]);
  const contents = Object.values(results);

  //TODO: Pagination: https://swapi.dev/api/people/?search=a&page=2 - You have next & previous on response
  const rowsPerPage = 2;
  const page = 0;

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
            {(rowsPerPage > 0
              ? contents.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : contents
            ).map((content: any, index: number) => (
              <TableRow key={index}>
                {Object.values(content).slice(0, 5).map((value: any) => (
                  <TableCell component="th" scope="row">{value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* //TODO: Implement pagination */}
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={100}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={() => { }}
      />
    </>
  );
};
