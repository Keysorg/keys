import React from 'react';
import { Button, Typography } from '@mui/material';
import Link from 'next/link';

import { DataTable } from '@/components'
import { client } from '@/lib/client';

const Transaction = ({ transactions }: any) => {

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
        { field: 'paid_at', headerName: 'Paid At', width: 130 },
        { field: 'created_at', headerName: 'Created At', width: 130 },
        {
            field: 'action',
            headerName: '',
            width: 130,
            renderCell: ({ row }: any) =>
                <Link target='_blank' href={`/transaction/${row.id}`}>
                    <Button variant='contained' onClick={() => console.log(row)}>
                        View
                    </Button>
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
        <div>
            <Typography variant='h4'>Transactions</Typography>
            <div>
                <DataTable rows={transactions} columns={columns} />
            </div>
        </div>
    )
}

export const getStaticProps = async () => {
    let transactions: any = {};
    // fetch only user's transaction
    const transaction_query = `*[_type == "transaction" && email == 'tony@gmail.com']`;

    transactions = await client.fetch(transaction_query);

    return {
        props: { transactions }
    }
}

export default Transaction