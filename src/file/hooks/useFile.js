import { useEffect, useState } from 'react'
import { getFiles } from '../api/file.api'

export const useFile = (fileName = null) => {
  const initialState = {
    data: null,
    isFetching: false,
    isError: false,
    isSuccess: false,
    error: ''
  }

  const [state, setState] = useState(initialState)

  const getFetch = async (fileName) => {
    setState({
      ...initialState,
      isFetching: true
    })

    await getFiles(fileName)
      .then((data) => {
        if (data) {
          setState({
            ...state,
            data,
            isFetching: false,
            isError: false,
            isSuccess: true
          })
        }
      })
      .catch((error) => {
        setState({ ...state, isError: true, error })
      })
  }

  useEffect(() => {
    getFetch()
  }, [])

  useEffect(() => {
    getFetch(fileName)
  }, [fileName])

  return {
    data: state.data,
    isFetching: state.isFetching,
    isError: state.isError,
    isSuccess: state.isSuccess,
    error: state.error
  }
}
