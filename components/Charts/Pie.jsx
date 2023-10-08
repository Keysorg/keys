import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Chart } from "react-google-charts";

import { calculateTransactionPieData, sum } from '@/lib/utils';

export default function Pie({ data, options }) {

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
            />
        </Box>
    );
}