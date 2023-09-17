import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from 'react-redux'
import { onLoaderOpen } from '../../common/slice/appSlice'
import { convertDataToRows } from '../helper'
import { useFile } from '../hooks'

export const FileTable = () => {
  const { searchText } = useSelector((state) => state.app)
  const { data, isFetching, isSuccess } = useFile(searchText)
  const [rows, setRows] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    // Convert API format to row format
    data && setRows(convertDataToRows(data))
  }, [isSuccess])

  useEffect(() => {
    dispatch(onLoaderOpen(isFetching))
  }, [isFetching])

  return (
    <>
      <Table striped bordered hover size='sm' className='App'>
        <thead>
          <tr key='h1'>
            <th>File Name</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((item) => {
            return (
              <tr key={item.colKey}>
                <td>{item.colFileName}</td>
                <td>{item.colText}</td>
                <td>{item.colNumber}</td>
                <td>{item.colHex}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}
