export const convertDataToRows = (data) => {
  let result = []
  let rowIndex = 1

  if (!data) return result

  data.forEach((item) => {
    item.lines.forEach((line) => {
      const newLine = {
        colKey: rowIndex,
        colFileName: item.file,
        colText: line.text,
        colNumber: line.number,
        colHex: line.hex
      }

      result.push(newLine)
      rowIndex++
    })
  })

  // Order lines
  result = result.sort((a, b) => {
    return a.colFileName.localeCompare(b.colFileName)
  })

  return result
}
