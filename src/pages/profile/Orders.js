import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod) {
  return { id, date, name, shipTo, paymentMethod};
}

const rows = [
  createData(0, '16 Mar, 2019', 'School 1', 'Tupelo, MS', 'Insert Address'),
  createData(1, '16 Mar, 2019', 'School 2', 'London, UK', 'Insert Address'),
  createData(2, '16 Mar, 2019', 'School 3', 'Boston, MA', 'Insert Address'),
  createData(3, '16 Mar, 2019', 'School 4', 'Gary, IN', 'Insert Address'),
  createData(4, '15 Mar, 2019', 'School 5', 'Long Branch, NJ', 'Insert Address'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Groups</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Join Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>School Location</TableCell>
            <TableCell>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="secondary" href="#" onClick={preventDefault}>
          See more groups
        </Link>
      </div>
    </React.Fragment>
  );}