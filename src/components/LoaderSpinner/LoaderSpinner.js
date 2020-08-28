import React, { Component } from 'react';
import './LoaderSpinner.css';

const LoaderSpinner = () => {
  return (
    <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  )
}

export default LoaderSpinner;
