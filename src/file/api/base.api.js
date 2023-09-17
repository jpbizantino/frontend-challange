import axios from 'axios'
import axiosRetry from 'axios-retry'
import { API_URL } from '../../common/config/config'

// const API_URL = 'http://localhost:3000/api/v1/files'

export const axiosFileBase = axios.create({
  baseURL: `${API_URL}`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

axiosRetry(axiosFileBase, { retries: 3 })
axiosRetry(axiosFileBase, { retryDelay: axiosRetry.exponentialDelay })

axiosFileBase.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers
  }

  return config
})
