import { useFormik } from 'formik'
import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { onSetSearchText } from '../../common/slice/appSlice'

export const Search = () => {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      searchText: ''
    },
    validationSchema: Yup.object({
      searchText: Yup.string().required('Please set a value.')
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      dispatch(onSetSearchText(values.searchText.trim()))
    },
    onReset: (values) => {
      values = {
        searchText: ''
      }
      dispatch(onSetSearchText(''))
    }
  })

  return (
    <form
      onSubmit={formik.handleSubmit}
      onReset={formik.handleReset}
      className='search'
    >
      <Form.Group className='mb-3'>
        <Form.Label>File Name to search</Form.Label>
        <Form.Control
          id='searchText'
          name='searchText'
          type='text'
          value={formik.values.searchText}
          onChange={formik.handleChange}
          isInvalid={!!formik.errors.searchText}
          placeholder='eg. text9.csv'
        />
        <Form.Control.Feedback type='invalid'>
          {formik.errors.searchText}
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant='primary' type='submit'>
        Search File
      </Button>
      <Button className='search-botton ' variant='primary' type='reset'>
        Reset
      </Button>
    </form>
  )
}
