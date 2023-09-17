import { axiosFileBase } from './base.api'

export const getFiles = async (fileName = null) => {
  let result = null
  let params = ''

  if (fileName) params = '?fileName='.concat(encodeURIComponent(fileName))

  await axiosFileBase.get('/data' + params).then((data) => {
    result = data.data
  })

  return result
}
