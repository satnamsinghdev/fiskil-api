import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, TextField  } from '@material-ui/core';
import {Navigate, useNavigate} from 'react-router';
import { userLoginAction } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getAccessToken } from '../utils/accessTokenUtil';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user, isLoading, error} = useSelector(state => state.userState);

  const formik = useFormik({
    initialValues: {
      email: 'b852280e-c678-4c07-81e7-a022fe03b9a7',
      password: 'vI1836PwYTyY8uUUl7zhC4LKtdfnJPi1UA3EQ97zDACZXVdxSP'
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .required(
          'Must be a valid email')
        .max(255)
        .required(
          'Email is required'),
      password: Yup
        .string()
        .max(255)
        .required(
          'Password is required')
    }),
    onSubmit: () => {
      dispatch(userLoginAction(formik.values));
    }
  });

  if(user.ClientID) {
    navigate("/");
  }

  const handleSubmit = () => {
    dispatch(userLoginAction(formik.values));
  }

  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="sm">

          <form onSubmit={formik.handleSubmit}>
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="input"
              value={formik.values.email}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
            />
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={isLoading}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                onClick={handleSubmit}
              >
                Sign In Now
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Login;