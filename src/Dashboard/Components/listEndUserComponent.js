import { useState, useEffect } from 'react';
// import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Button,
  Typography
} from '@mui/material';
import { useSelector } from 'react-redux';
import { getEndUserAction, deleteEndUserAction } from '../../redux/actions';
import DeleteIcon from '@mui/icons-material/Delete';

export const EndUserListComponent = ({...rest }) => {
  const dispatch = useDispatch();
  const endUsers = useSelector(state => state.endUsersState.users)
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    dispatch(getEndUserAction());
  }, [dispatch])

  const handleDelete = (id) => {
    dispatch(deleteEndUserAction(id));
  }


  return (
    <Card {...rest}>
      {/* <PerfectScrollbar> */}
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  End User Id
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {endUsers.slice(0, limit).map((user,key) => (
                <TableRow
                  hover
                  key={key}
                >
                  <TableCell>
                    {user.email}
                  </TableCell>
                  <TableCell>
                    {user.end_user_id}
                  </TableCell>
                  <TableCell>
                      <DeleteIcon onClick={() => handleDelete(user.end_user_id)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      {/* </PerfectScrollbar> */}
      <TablePagination
        component="div"
        count={endUsers.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

EndUserListComponent.propTypes = {
  endUsers: PropTypes.array.isRequired
};