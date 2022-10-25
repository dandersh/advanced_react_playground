import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import _ from 'lodash'

const columns = [
  {field: 'id', headerName: 'ID'},
  {field: 'name', headerName: 'Name', width: 250}
]

const SwapiList= ({data}) => {

  const names = data.results.map ( (item) => {
    return _.pickBy(item, (data, key) =>  key === 'name' )
  })


    return (
        <Box sx={{ height: 400, width: '100%' }} >
          <DataGrid
            columns={columns}
            getRowId={(row) => row.name}
            rows={names}
          />
        </Box>   
    )
}

export default SwapiList