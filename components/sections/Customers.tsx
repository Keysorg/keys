import React, { useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';

import { DataTable } from '@/components'
import { client } from '@/lib/client';
import { Title } from '.';

const Customers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        let users: any = [];

        // const query = `*[_type == "users" && role == 'CUSTOMER']`;

        // users = await client.fetch(query);
        users = [
            {
                id: 1,
                userName: 'TonyStark',
                email: "tony@email.com",
                created_at: "2023-09-01"
            },
            {
                id: 2,
                userName: 'Zoro',
                email: "zoro@email.com",
                created_at: "2023-09-01"
            },
            {
                id: 3,
                userName: 'Luffy',
                email: "luffy@email.com",
                created_at: "2023-09-01"
            }
        ]
        setUsers(users)
    }, [])

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'userName', headerName: 'User Name', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        { field: 'created_at', headerName: 'Created At', width: 130 }
    ];

    return (
        <div>
            <Title>Users</Title>
            <div>
                <DataTable rows={users} columns={columns} />
            </div>
        </div>
    )
}

export default Customers