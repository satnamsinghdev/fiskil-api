import React from 'react';
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { Clock as ClockIcon } from '../../icons/clock';

export default function InstitutionCard({institution}) {
  return (
<Card sx={{display: 'flex', flexDirection: 'column', height: '100%'}}>
    <CardContent>
      <Box sx={{display: 'flex', justifyContent: 'center', pb: 3}}>
        <Avatar
          alt="Institution"
          src={institution.icon}
          variant="square"
        />
      </Box>
      <Typography
        align="center"
        color="textPrimary"
        gutterBottom
        variant="h5"
      >
        {institution.name}
      </Typography>
      <Typography
        align="center"
        color="textPrimary"
        variant="body1"
      >
       Id: {institution.inst_id}
      </Typography>
      <Typography
        align="center"
        color="textPrimary"
        variant="body1"
      >
       Type: {institution.inst_type}
      </Typography>
      <Typography
        align="center"
        color="textPrimary"
        variant="body1"
      >
       Updated at: {institution.updated_at}
      </Typography>
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
        <Grid item sx={{ alignItems: 'center', display: 'flex' }}>
          <ClockIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            Created at {institution.created_at}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Card>
)
}
