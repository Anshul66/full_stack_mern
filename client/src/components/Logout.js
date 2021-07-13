import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
const Logout = () => {
    const history =  useHistory();
      useEffect(() =>{
          fetch('/Logout',{
              method: "GET",
              headers:{
                  Accept: "application/json",
                  "Content-Type": "application/json"
              },
              credentials: "include"
          }).then((res) =>{
              history.push('/Login')
          })
      })
    return (
        <>
          <h1>Successfuly Logout</h1>  
        </>
    )
}

export default Logout
