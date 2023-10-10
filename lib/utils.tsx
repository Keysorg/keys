import { useEffect, useRef, useState } from "react";

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];


export const calculateTransactionData = (transactions: any) => {
    let aggregatedProductData: any = [
        ["Task", "Hours per Time"]
    ]
    let aggregatedProducts: any = {}

    let aggregatedOrgData: any = [
        ["Task", "Services per Time"]
    ]
    let aggregatedOrgProducts: any = {}

    let trendData: any = [
        ["Month", "Sales"],
        ["June", 33],
        ["July", 23],
        ["August", 90]
    ]
    let aggregatedTrendData: any = {}


    let allProducts: any = [];
    let totalPrice = 0;
    let prices: any = []
    transactions.map((transaction: any) => {
        allProducts.push(...transaction.products)
        prices.push(parseInt(transaction.price))
    })
    totalPrice = sum(prices)

    // pie data products
    allProducts.map((product: any) => {
        if (Object.keys(aggregatedProducts).includes(product.service)) {
            aggregatedProducts[product.service].push(product.price * product.quantity)
        }
        else {
            aggregatedProducts[product.service] = [product.price * product.quantity]
        }
    })

    Object.keys(aggregatedProducts).map((key: any, idx: any) => {
        aggregatedProductData.push([
            key,
            parseInt(((sum(aggregatedProducts[key]) / totalPrice) * 100).toFixed(2))
        ])
    })

    // org data
    allProducts.map((product: any) => {
        if (Object.keys(aggregatedOrgProducts).includes(product.company)) {
            aggregatedOrgProducts[product.company].push(product.price * product.quantity)
        }
        else {
            aggregatedOrgProducts[product.company] = [product.price * product.quantity]
        }
    })

    Object.keys(aggregatedOrgProducts).map((key: any, idx: any) => {
        aggregatedOrgData.push([
            key,
            parseInt(((sum(aggregatedOrgProducts[key]) / totalPrice) * 100).toFixed(2))
        ])
    })

    // trend data
    transactions.map((transaction: any) => {
        let month: any = monthNames[(new Date(transaction.paid_at).getMonth())]

        if (Object.keys(aggregatedTrendData).includes(month)) {
            aggregatedTrendData[month].push(transaction.price)
        }
        else {
            aggregatedTrendData[month] = [transaction.price]
        }
    })

    Object.keys(aggregatedTrendData).map((key: any, idx: any) => {
        trendData.push([
            key,
            parseInt(((sum(aggregatedTrendData[key]) / totalPrice) * 100).toFixed(2))
        ])
    })

    return { aggregatedProductData, aggregatedOrgData, trendData, totalPrice };
}

export const sum = (data: any) => {
    return data?.reduce((a: any, b: any) => a + b, 0)
}

export const calculatePriceTrendData = (data: any, totalPrice: any) => {
    let result: any = [
        ["Month", "Sales", "Expenses"]
    ]
    let aggregatedtransactions: any = {}

    data.map((transaction: any) => {
        let month: any = (new Date(transaction.paid_at).getMonth())

        if (Object.keys(aggregatedtransactions).includes(month)) {
            aggregatedtransactions[month].push(transaction.price)
        }
        else {
            aggregatedtransactions[month] = [transaction.price]
        }
    })

    Object.keys(aggregatedtransactions).map((key: any, idx: any) => {
        result.push([
            key,
            parseInt(((sum(aggregatedtransactions[key]) / totalPrice) * 100).toFixed(2))
        ])
    })

    return result;
}

type StorageType = 'session' | 'local';
type UseStorageReturnValue = {
    getItem: (key: string, type?: StorageType) => string;
    setItem: (key: string, value: string, type?: StorageType) => boolean;
    removeItem: (key: string, type?: StorageType) => void;
};

export const useStorage = (): UseStorageReturnValue => {
    const storageType = (type?: StorageType): 'localStorage' | 'sessionStorage' => `${type ?? 'session'}Storage`;

    const isBrowser: boolean = ((): boolean => typeof window !== 'undefined')();

    const getItem = (key: string, type?: StorageType): string => {
        return isBrowser ? window[storageType(type)][key] : '';
    };

    const setItem = (key: string, value: string, type?: StorageType): boolean => {
        if (isBrowser) {
            window[storageType(type)].setItem(key, value);
            return true;
        }

        return false;
    };

    const removeItem = (key: string, type?: StorageType): void => {
        window[storageType(type)].removeItem(key);
    };

    return {
        getItem,
        setItem,
        removeItem,
    };
};