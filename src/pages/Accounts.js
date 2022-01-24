import React, {useEffect,useState} from 'react';
import { Box, Container, Grid, Card, TextField, Typography, CardContent } from '@mui/material';
import { useDispatch ,useSelector} from 'react-redux';
import {getAccountsAction} from '../redux/actions';

export function Accounts() {
  const endUsers = useSelector(state => state.endUsersState.users);
  const getAllAccounts = useSelector(state => state.accountsState);

  // const [dropDownSelector,setDropDownSelector] = useState(endUsers[0].end_user_id);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(getAccountsAction(event.target.value))
    // setDropDownSelector(event.target.value)
  }

  // useEffect(()=>{
  //     dispatch(getAccountsAction(dropDownSelector));
  // },[dispatch]);

return (
    <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
      <Container maxWidth={false}>
        <Box sx={{ pt: 3 }}>
          <Grid container spacing={3}>
          <Typography variant="h4" style={{paddingBottom:'10px',paddingLeft:'20px'}}>
            Accounts
          </Typography>
          </Grid>
        </Box>
        <Grid item md={6} xs={12}>
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
            {getAllAccounts.isLoading ? <Typography variant="h4"> Loading </Typography> :
              getAllAccounts.accounts && getAllAccounts.accounts.length ?(
              <>
              {getAllAccounts.accounts.map((item, key) => {
               return ( 
               <Card>
                  <CardContent>
                      <Grid container spacing={6} wrap="wrap" key={key}>
                      <Grid item md={4} sm={6} sx= {{display: 'flex', flexDirection: 'column'}} xs={12}>
                  <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="h6"
                  >
                    Name : {item.display_name}
                  </Typography>

                  <Typography
                    color="textPrimary"
                    gutterBottom
                  >
                  Product Name: {item.product_name}
                  </Typography>
                  <Typography
                    color="textPrimary"
                    gutterBottom
                  >
                    Product Category : {item.product_category}
                  </Typography>
                  <Typography
                    color="textPrimary"
                    gutterBottom
                  >
                    Nick Name : {item.nick_name}
                  </Typography>
                  <Typography
                    color="textPrimary"
                    gutterBottom
                  >
                    Account Id : {item.account_id}
                  </Typography>
                  <Typography
                    color="textPrimary"
                    gutterBottom
                  >
                    Masked Number : {item.masked_number}
                  </Typography>
                  
                  <Typography
                    color="textPrimary"
                    gutterBottom
                  >
                    Creation Date : {item.creation_date}
                  </Typography>
                  <Typography
                    color="textPrimary"
                    gutterBottom
                  >
                    Institution Id : {item.institution_id}
                  </Typography>
                </Grid>
                      </Grid>
                  </CardContent>
                </Card>
                )})}
              </>)
            :
            (<Typography>{getAllAccounts.message}</Typography>)
            }
      </Container>
    </Box>
);
}


export default Accounts;