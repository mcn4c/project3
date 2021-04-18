import React from 'react';
import API from '../utils/API';
// import { Link } from "react-router-dom";



const Navbar = () => {
    // Create state variables
    let [responseData, setResponseData] = React.useState('')
    // fetches data

 
    const fetchData = () => {
        API.getQuote()
        .then((response)=>{
            setResponseData(response.data)
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    fetchData();

    return (          


<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Jot Logo</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Something</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Something Else</a>
      </li>
    </ul>
    <span className="navbar-text">
  Hello Jenner how are you?
    </span>   
    
  </div>
</nav>

    )
}

export default Navbar;
