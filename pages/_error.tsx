import React from 'react'
import { Box, Typography } from '@material-ui/core'

function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? (
          <div>
            <Box display="flex" height="100vh" flexDirection="column" justifyContent="center" alignItems="center">
              <Box flexDirection="row" display="flex" width="100%" height="300px" justifyContent="center">
              <img src="assets/img/404.jpg" style={{maxWidth:"100%",height:"auto",textAlign:"center"}} alt=""/>
              </Box>
                <Typography variant="h3" component="div">
                  <Box textAlign="center" p={1}>
                  404 Page Not Found
                  </Box>
                  </Typography>
            </Box>
          </div>
        )
        : 'An error occurred on client'}
    </p>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error