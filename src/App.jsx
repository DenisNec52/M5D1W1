import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from 'react';
import Navbar from "./navbar";
import Myfooter from "./footer";
import AllTheBooks from "./AllTheBooks";
import Container from 'react-bootstrap/Container';

function App() {
  useEffect(() => {
    // Display a welcome alert when the component mounts
    alert('Welcome to paperinoland.it!');
  }, []);
  return (
    <>
            <Navbar />
            <Container>  
            <AllTheBooks/>
            </Container>
            <Myfooter />
</>
)}

export default App;