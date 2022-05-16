import { LinearProgress } from '@mui/material'
import React, { PropTypes } from 'react'


const LoadingSpinner = () => (
  <div className="loading_spinner-wrap">
    <LinearProgress />
  </div>
)

export default LoadingSpinner