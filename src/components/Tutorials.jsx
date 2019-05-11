import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(tutorials, tutor, price) {
  id += 1;
  return { tutorials, tutor, price };
}

const rows = [
  createData('Learn javascript in 10 days', 'Deluxan', '$120'),
  createData('HTML 5 & CSS 3', 'Hari Lojunan', '$60'),
  createData('Spring boot CRUD operations', 'Tyrone', '$150')
];

function CustomizedTable(props) {
  const { classes } = props;

  return (
      <div className="container">
        <div className="row">
        <Paper className={classes.root}>
        <h3>Tutorials available</h3>
            <Table className={classes.table}>
                <TableHead>
                <TableRow>
                    <CustomTableCell>Tutorials</CustomTableCell>
                    <CustomTableCell align="right">Tutor name</CustomTableCell>
                    <CustomTableCell align="right">Price</CustomTableCell>
                    <CustomTableCell align="center">Update</CustomTableCell>
                    <CustomTableCell align="center">Delete</CustomTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map(row => (
                    <TableRow className={classes.row} key={row.id}>
                    <CustomTableCell component="th" scope="row">
                        {row.tutorials}
                    </CustomTableCell>
                    <CustomTableCell align="right">{row.tutor}</CustomTableCell>
                    <CustomTableCell align="right">{row.price}</CustomTableCell>
                    <CustomTableCell align="center"><Icon>edit</Icon></CustomTableCell>
                    <CustomTableCell align="center"><Icon color="secondary">delete</Icon></CustomTableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Paper>
        </div>
      </div>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);
