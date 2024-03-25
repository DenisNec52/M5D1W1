import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import AllTheBooks from './components/AllTheBooks'
import { Container } from 'react-bootstrap'
import { useState } from 'react'

function App() {
  const [theme, setTheme] = useState('light')
  return (
    <>
      <MyNav theme={theme} onClick = {setTheme} />
      <Container>
        <Welcome />
        <AllTheBooks />
      </Container>
      <MyFooter />
    </>
  )
}

export default App
