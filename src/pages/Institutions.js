import React, {useEffect} from 'react';
import { Box, Container, Grid, Pagination } from '@mui/material';
import InstitutionCard from '../Dashboard/snippets/institutionCard'; 
import { useDispatch, useSelector } from 'react-redux';
import { getInstitutionsAction } from '../redux/actions';

export function Institutions() {
  const dispatch = useDispatch();
    const institutions = useSelector(state => state.institutionsState);
    
    useEffect(() => {
        dispatch(getInstitutionsAction());
    }, [dispatch])
return(
  <>
  {institutions.isLoading ? <h1>Loading</h1> :
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {institutions.institutions.map((institution) => (
              <Grid
                item
                key={institution.inst_id}
                lg={4}
                md={6}
                xs={12}
              >
                <InstitutionCard institution={institution} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  }
  </>
);
}
export default Institutions;