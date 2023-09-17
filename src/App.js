// import { default as React } from 'react'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { Loader } from './common/components'
import { FileList } from './file/FileList'
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import { Search } from './file/components/Search'

const App = () => {
  return (
    <>
      {/* Spinner Loader manage by Redux */}
      <Loader />

      <Navbar expand='lg' className='navbar'>
        <Container className='navbar-text'>React Test App</Container>
      </Navbar>

      <Container>
        <Search />
        <FileList />
      </Container>
    </>
  )
}

export default App
