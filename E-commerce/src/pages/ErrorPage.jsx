import React from 'react'

function ErrorPage() {
  return (
    <>
        <center> 
        <div
              style={{
                position: "fixed",
                top: "100px",
                left: "100px",
                zIndex: 99999,
                color: "red",
                backgroundColor: "yellow",
                fontSize: "40px",
                padding: "20px",
                display: "block",
                opacity: 1,
                visibility: "visible",
              }}
            >
              404 ERROR
            </div>
        </center>
    </>
  )
}

export default ErrorPage