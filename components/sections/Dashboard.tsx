import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Paper, Typography } from '@mui/material';

import Orders from './Orders';
import { Pie, Line } from '@/components';

import { client } from '@/lib/client';
import { calculateTransactionData } from '@/lib/utils';

const Dashboard = () => {
    const [pieData, setPieData] = useState([]);
    const [orgData, setOrgData] = useState([]);
    const [trendData, setTrendData] = useState([]);
    const [numberOfTransactions, setNumberOfTransactions] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        getTransactions()
    }, [])

    const productOptions = {
        title: "Services Performance",
    };

    const orgOptions = {
        title: "Organisation Performance",
    };

    // const trendData = [
    //     ["Month", "Sales", "Expenses"],
    //     ["Jan", 1000, 400],
    //     ["Feb", 1170, 460],
    //     ["Mar", 660, 1120],
    //     ["Apr", 1030, 540],
    // ];

    const lineOptions = {
        title: "Company Performance",
        curveType: "function",
        legend: { position: "bottom" },
    };


    const getTransactions = async () => {
        const query = `*[_type == "transaction"]`;

        let transactions = await client.fetch(query);

        if (transactions) {
            setNumberOfTransactions(transactions.length)
            let { aggregatedProductData, aggregatedOrgData, trendData, totalPrice } = calculateTransactionData(transactions)
            
            setPieData(aggregatedProductData)
            setOrgData(aggregatedOrgData)
            setTrendData(trendData)
            setTotalPrice(totalPrice)
        }
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={6}>
                {/* <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}> */}
                    <Typography>Number of Transactions</Typography>
                    <Typography variant='h4'>{numberOfTransactions}</Typography>
                {/* </Paper> */}
            </Grid>
            <Grid item xs={6}>
                {/* <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}> */}
                    <Typography>Total</Typography>
                    <Typography variant='h4'>GHS {totalPrice}</Typography>
                {/* </Paper> */}
            </Grid>
            <Grid item xs={12} md={8} lg={6}>
                <Pie data={pieData} options={productOptions} />
            </Grid>
            <Grid item xs={12} md={8} lg={6}>
                <Pie data={orgData} options={orgOptions} />
            </Grid>
            <Grid item xs={12}>
                <Line data={trendData} options={lineOptions} />
            </Grid>
            <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <Orders />
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Dashboard