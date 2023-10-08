export default {
    name: 'transaction',
    title: 'Transaction',
    type: 'document',
    fields: [
        {
            name: 'id',
            title: 'Payment ID',
            type: 'string'
        },
        {
            name: 'userName',
            title: 'User Name',
            type: 'string'
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string'
        },
        {
            name: 'products',
            title: 'Products',
            type: 'array',
            of: [{
                type: 'object',
                name: "inline",
                fields: [
                    {
                        name: 'image',
                        title: 'Image',
                        type: 'image',
                        options: {
                            hotspot: true
                        }
                    },
                    {
                        name: 'name',
                        title: 'Name',
                        type: 'string'
                    },
                    {
                        name: 'details',
                        title: 'Details',
                        type: 'string'
                    },
                    {
                        name: 'service',
                        title: 'Service',
                        type: 'string'
                    },
                    {
                        name: 'company',
                        title: 'Company',
                        type: 'string'
                    },
                    {
                        name: 'slug',
                        title: 'Slug',
                        type: 'string'
                    },
                    {
                        name: 'quantity',
                        title: 'Quantity',
                        type: 'number'
                    },
                    {
                        name: 'price',
                        title: 'Price',
                        type: 'number'
                    }
                ]
            }],
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number'
        },
        {
            name: 'currency',
            title: 'Currency',
            type: 'string'
        },
        {
            name: 'payment_option',
            title: 'Payment Option',
            type: 'string'
        },
        {
            name: 'account',
            title: 'Account (Momo/Bank Details)',
            type: 'string'
        },
        {
            name: 'status',
            title: 'Transaction Status',
            type: 'string'
        },
        {
            name: 'paid_at',
            title: 'Paid At',
            type: 'string'
        },
        {
            name: 'created_at',
            title: 'Created At',
            type: 'string'
        }
    ]
}