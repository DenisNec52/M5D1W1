import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from 'react';
import Navbar from "./Components/MyNavbar.jsx";
import Myfooter from "./Components/MyFooter";
import AllTheBooks from "./Components/AllTheBooks";
import Container from 'react-bootstrap/Container';
import Intro from './Components/MyIntro.jsx';

function App() {
  return (
    <>
            <Navbar />
            <Intro />
            <Container>  
            <AllTheBooks/>
            </Container>
            <Myfooter />
</>
)}

export default App;