import React, {useState} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Typography, Button } from '@mui/material';

export default function ClickToCopy({user}) {
    const [copyState, setCopyState] = useState(false); 

  return (
  <>
    <Typography nowrap>
        {`https://auth.fiskil.com/?id=b852280e-c678-4c07-81e7-a022fe03b9a7&end_user_id=${user.end_user_id}&sandbox=true`}
    </Typography>
    <CopyToClipboard text={`https://auth.fiskil.com/?id=b852280e-c678-4c07-81e7-a022fe03b9a7&end_user_id=${user.end_user_id}&sandbox=true`} onCopy={() => setCopyState(true)}>
        <Button disabled={copyState} variant="contained">{copyState ? 'Copied':'Click To Copy'}</Button>
    </CopyToClipboard>
  </>
  )
}
