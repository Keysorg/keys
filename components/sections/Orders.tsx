import React, { useState, useEffect } from 'react';
import Link from '@mui/material/Link';
import { IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

import Title from './Title';
import { DataTable } from '@/components';
import { client } from '@/lib/client';


export default function Orders() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getUserData()
  }, [])

  const getUserData = async () => {
    const query = `*[_type == "transaction"]`;

    let transactions = await client.fetch(query);

    setTransactions(transactions)
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'userName', headerName: 'User Name', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    {
      field: 'products',
      headerName: 'Products',
      width: 130,
      valueGetter: (params: any) =>
        `${params.row.products.length || ''}`,
    },
    { field: 'price', headerName: 'Price', type: "number", width: 130 },
    { field: 'currency', headerName: 'Currency', width: 130 },
    { field: 'payment_option', headerName: 'Payment Method', width: 130 },
    { field: 'account', headerName: 'Account', width: 130 },
    { field: 'status', headerName: 'Status', width: 130 },
    {
      field: 'paid_at', headerName: 'Paid At', width: 130,
      valueGetter: ({ row }: any) =>
        `${(new Date(row.paid_at)).toString()}`
    },
    // {
    //   field: 'created_at', headerName: 'Created At', width: 130,
    //   valueGetter: ({ row }: any) =>
    //     `${(new Date(row.created_at)).toString()}`
    // },
    {
      field: 'action',
      headerName: '',
      width: 130,
      renderCell: ({ row }: any) =>
        <Link target='_blank' href={`/transaction/${row.id}`}>
          <IconButton color="primary">
            <VisibilityIcon sx={{fontSize: '20px'}}/>
          </IconButton>
        </Link>,
    },
    // {
    //     field: 'fullName',
    //     headerName: 'Full name',
    //     description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 160,
    //     valueGetter: (params: any) =>
    //         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
  ];

  return (
    <React.Fragment>
      <div>
        <Title>Orders</Title>
        <div>
          <DataTable rows={transactions} columns={columns} />
        </div>
      </div>
    </React.Fragment>
  );
}
