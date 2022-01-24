import React , { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    Typography,
    Alert
  } from '@mui/material';
import Snackbar from '@material-ui/core/Snackbar';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createEndUserAction } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getEndUserAction } from '../../redux/actions';

  export function AddEndUserComponent(props){
    const dispatch = useDispatch();
    
    const endUsersAction = useSelector(state => state.endUserActionState);
    const [modelShow, setOpen] = useState(false);
    const formik = useFormik({
        initialValues: {
          email:''
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
          dispatch(createEndUserAction(formik.values.email));
          setOpen(true);
        }
      });

    const handleClose = () => {
      
      setOpen(false);
    }

      useEffect(() => {
        dispatch(getEndUserAction());
      }, [dispatch]);

    return (
    <Box {...props}>
        <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          m: -1
        }}
      >
        <Typography
          sx={{ m: 1 }}
          variant="h4"
        >
          End Users
        </Typography>

      </Box>
      <Box sx={{ mt: 3 }}>
      {endUsersAction.success ?
          <Snackbar open={modelShow} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">{endUsersAction.success}</Alert>
          </Snackbar> : null}

        {endUsersAction.error ? <Snackbar open={modelShow} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">{endUsersAction.error}</Alert>
          </Snackbar> : null}
        <Card>
          <CardContent>

          <form onSubmit={formik.handleSubmit}>
          <div style={{display:"flex",alignItems:"center"}}>
            <Box sx={{ maxWidth: 500 }}>
              
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
            </Box>
            <Box sx={{ m: 1 }}>
              <Button
              // color="primary"
              variant="contained"
              type="submit"
              >
            Add User
            </Button>
          </Box>
        </div>
        </form>
        </CardContent>
        </Card>
      </Box>
    </Box>
      )
  };