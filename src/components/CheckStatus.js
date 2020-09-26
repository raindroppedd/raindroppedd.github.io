
import React from 'react'

const CheckStatus = ({ status }) => {
  let statusMessage = '';

  if (status === 'fetching'){
    statusMessage = 'Fetching weather';
  }else if(status === 'unable'){
    statusMessage = 'Unable to find your location';
  }else if(status === 'unsupported'){
    statusMessage = 'Location Feature is blocked or unsupported';
  }else{
    statusMessage = 'init';
  }


  return (
    <h3 className='status-message'>{statusMessage}</h3>
  );
}
export default CheckStatus;