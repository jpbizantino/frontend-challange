// import { default as React } from 'react'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { SpinnerLoader } from './common/components'
import { FileList } from './file/view/FileList.jsx'
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <>
      <SpinnerLoader />

      <Navbar expand='lg' className='navbar'>
        <Container className='navbar-text'>React Test App</Container>
      </Navbar>

      <Container>
        <FileList />
      </Container>
    </>
  )
}

export default App
