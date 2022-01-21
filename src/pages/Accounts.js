import React, {useEffect} from 'react';
import { Box, Container, Grid, Pagination, TextField } from '@mui/material';
import { DashboardLayout } from '../Dashboard';
import { useDispatch ,useSelector} from 'react-redux';
import {getAccountsAction} from '../redux/actions';

export function Accounts() {
  const endUsers = useSelector(state => state.endUsersState.users);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    console.log("fkdjfdjk")
      dispatch(getAccountsAction(event.target.value));
  };

return (

  <DashboardLayout>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
       {/* <ProductListToolbar /> */}
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {/* {products.map((product) => (
              <Grid
                item
                key={product.id}
                lg={4}
                md={6}
                xs={12}
              >
                <ProductCard product={product} />
              </Grid>
            ))} */}
          </Grid>
        </Box>
        <Grid
              item
              md={6}
              xs={12}
        >
              <TextField
                fullWidth
                label="Select Accounts"
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                variant="outlined"
              >




                {endUsers.map((option,key) => (
                  <option
                    key={key}
                    value={option.end_user_id}
                  >
                    {option.email}
                  </option>
                ))}
              </TextField>
            </Grid>
      </Container>
    </Box>
  </DashboardLayout>
);
}


export default Accounts;