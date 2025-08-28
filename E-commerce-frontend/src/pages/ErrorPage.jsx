import React from 'react';
import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className="not-found-container">
      
      <div className="shape-circle"></div>
      <div className="shape-square"></div>

      <div className="content-box">
        
        <h1 className="title-404">
          4<span className="animated-zero">0</span>4
        </h1>
        
        <h2 className="subtitle">
          Page Not Found
        </h2>
        
        <p className="description">
          Looks like you've wandered off the map. The route you're looking for was moved, removed, or might never have existed.
        </p>
        
        <a href="/" className="btn-home">
          <svg 
            className="btn-icon" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Return Home
        </a>
      </div>
      
    </div>
  );
};

export default ErrorPage;