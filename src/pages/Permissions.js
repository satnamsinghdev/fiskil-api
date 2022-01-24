import React, { useEffect } from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    Typography
  } from '@mui/material';
  import { useDispatch, useSelector } from 'react-redux';
  import { getPermissionsAction } from '../redux/actions'
  
  export default function Permissions(props) {
      const dispatch = useDispatch();
      const permissions = useSelector(state => state.permissionsState)
      console.log("permissions", permissions)
      useEffect(() => {
        dispatch(getPermissionsAction());
      }, [dispatch])

      return(
    <form {...props}>
    {permissions.isLoading ?  <h1> Loading </h1>:
      <Card>
        <CardHeader
          title="Permissions"
        />
        <Divider />
        {permissions.permissions.map((permission) => { 
            return ( 
            <CardContent>
          <Grid
            container
            spacing={6}
            wrap="wrap"
          >
            <Grid
              item
              md={4}
              sm={6}
              sx={{
                display: 'flex',
                flexDirection: 'column'
              }}
              xs={12}
            >
              <Typography
                color="textPrimary"
                gutterBottom
                variant="h6"
              >
                Permission : {permission.permission}
              </Typography>

              <Typography
                color="textPrimary"
                gutterBottom
              >
               Id: {permission.permission_id}
              </Typography>

              <Typography
                color="textPrimary"
                gutterBottom
              >
                Description : {permission.description}
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                Scope : {permission.scope}
              </Typography>
              <Typography variant="h5">Standards </Typography>
              {permission.standards.map((standard, key) => { 
                return ( 
              <Typography
                color="textPrimary"
                gutterBottom
                key={key}
              >
                {standard}
              </Typography>
              
            )})}
            </Grid>
            
          </Grid>
        </CardContent>)})}
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Save
          </Button>
        </Box>
      </Card>
    }
    </form>
  
  )
}