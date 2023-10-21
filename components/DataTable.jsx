import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

export default function DataTable({ rows, columns, showToolbar=false }) {
  console.log(rows)
  return (
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        slots={{
          toolbar: showToolbar ? GridToolbar : '',
        }}
        sx={{
          height: 400,
          width: '80%',
          margin: 'auto'
        }}
      />
  );
}