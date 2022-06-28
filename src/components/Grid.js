
import React, { useEffect, useState } from 'react'
import { Navbar } from 'react-bootstrap'
import json from "../backend/Store.json"
import Display from './Display'
const Header = () => {
  let [state, setState] = useState(json)
  useEffect(() => {
   setState(json) 
  },[])
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "30px",
        backgroundColor: "rgb(22,26,66)",
        color: "white",
        paddingLeft:"100px"
      }}
    >
      {state.map(
        ({
          id,
          imageURL,
          name,
          type,
          price,
          currency,
          color,
          gender,
          quantity,
        }) => {
          return (
            <>
              <div
                style={{
                  height: "450px",
                  width: "400px",
                  backgroundColor: "black",
                  textAlign: "center",
                  border: "1px solid blue",
                  borderRadius: "20px",
                  padding: "30px",
                }}
              >
                <h1
                  style={{
                    fontSize: "30px",
                    fontWeight: "400",
                    fontFamily: "sans-serif",
                  }}
                >
                  {name}
                </h1>
                <img
                  style={{
                    height: "200px",
                    width: "200px",
                    border: "1px solid",
                    borderRadius: "20px",
                    marginTop: "5px",
                  }}
                  src={imageURL}
                  alt=""
                />
                <div>
                  <p
                    style={{
                      fontSize: "22px",
                      fontWeight: "400",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Price:{price}
                  </p>
                </div>
                  <p
                    style={{
                      fontSize: "22px",
                      fontWeight: "400",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Gender:{gender}
                  </p>
                  <button
                    style={{
                      height: "40px",
                      width: "150px",
                      border: "1px solid",
                      borderRadius: "5px",
                      backgroundColor:'rgb(12,218,174)',
                      fontSize: "18px",
                      color:"white",
                      fontWeight: "400",
                      fontFamily: "sans-serif",
                      textTransform:"uppercase"
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
            </>
          );
        }
      )}
      <Display />
    </div>
  );
}

export default Header
