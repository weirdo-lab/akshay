import React from 'react'
import { Box, Typography } from '@material-ui/core'


export default function Contactus() {
    return (
        <div>
               <Box display="flex" height="100vh" flexDirection="column" justifyContent="center" alignItems="center">
              <Box flexDirection="row" display="flex" width="100%" height="300px" justifyContent="center">
              <img src="assets/img/404.jpg" style={{maxWidth:"100%",height:"auto",textAlign:"center"}} alt=""/>
              </Box>
                <Typography variant="h3" component="div">
                  <Box textAlign="center" p={1}>
                 We are working on building this page
                  </Box>
                  </Typography>
            </Box>
        </div>
    )
}
