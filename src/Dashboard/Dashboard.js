import React from 'react';
import { DashboardLayout } from '.';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, TextField  } from '@material-ui/core';
import {AddEndUserComponent} from './Components/addEndUserComponent';
import { EndUserListComponent } from './Components/listEndUserComponent';
export default function Dashboard() {

    const formik = useFormik({
        initialValues: {
          email: '',
          
        },
        validationSchema: Yup.object({
          email: Yup
            .string()
            .required(
              'Must be a valid email')
            .max(255)
            .required(
              'Email is required'),
        }),
        onSubmit: () => {
        //   dispatch(userLoginAction(formik.values));
        }
      });

    const endUsers = [
      {email: "testing@testing.com", endUserId: "ee2cb38b-dc5c-4cbc-a5c1-f22bf25a2948"},
      {email: "jake@fiskil.com.au", endUserId: "6e9e0b32-8bb0-451e-b9ec-ef276ac3ded8"}
    ];

  return (<Box component="main" sx={{flexGrow: 1,py: 8}}>
          <Container maxWidth={false}>
            <AddEndUserComponent />
            <Box sx={{ mt: 3 }}>
              <EndUserListComponent />
            </Box>
          </Container>
        </Box>);
}
