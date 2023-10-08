import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

export default function DataTable({ rows, columns }) {
  return (
    <div style={{ height: 400, width: '100%' }}>
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
          toolbar: GridToolbar,
        }}
      />
    </div>
  );
}