// In un file come ToggleComponent.js
import React from 'react';
import { Button } from 'react-bootstrap';
function MyButton(props) {
  const {theme, changeTheme} = props; 
  return (
    <><Button onClick={()=> changeTheme(theme === "dark" ? "light" : "dark")}>cambia tema</Button>
    </>
  );
}

export default MyButton;
