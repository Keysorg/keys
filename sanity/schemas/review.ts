export default {
    name: 'review',
    title: 'Review',
    type: 'document',
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
            title: 'User Name',
            type: 'string'
        },
        {
            name: 'rating',
            title: 'Rating',
            type: 'number'
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string'
        }
    ]
}