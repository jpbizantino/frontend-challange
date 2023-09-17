import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { useSelector } from 'react-redux'

export const Loader = () => {
  const { isLoaderOpen } = useSelector((state) => state.app)

  if (!isLoaderOpen) return <div />

  return (
    <div className='backdrop'>
      <Spinner animation='border' role='status' className='spinner-border' />
    </div>
  )
}
