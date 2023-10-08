export default {
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
        {
            name: 'image1',
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
            name: 'desc1',
            title: 'Desc',
            type: 'string'
        },
        {
            name: 'smallText1',
            title: 'SmallText',
            type: 'string',
        },
        {
            name: 'midText1',
            title: 'MidText',
            type: 'string',
        },
        {
            name: 'largeText1',
            title: 'LargeText1',
            type: 'string',
        },
        {
            name: 'largeText2',
            title: 'LargeText2',
            type: 'string',
        }
    ]
}