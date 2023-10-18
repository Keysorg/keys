export default {
    name: 'landingPage',
    title: 'Landing Page',
    type: 'document',
    groups: [
        {
            name: 'banner1',
            title: 'Banner1'
        },
        {
            name: 'banner2',
            title: 'Banner2'
        }
    ],
    fields: [
        {
            name: 'image1',
            title: 'Image1',
            type: 'image',
            options: {
                hotspot: true,
            },
            group: 'banner1'
        },
        {
            name: 'image2',
            title: 'Image2',
            type: 'image',
            options: {
                hotspot: true,
            },
            group: 'banner2'
        },
        {
            name: 'buttonText1',
            title: 'ButtonText1',
            type: 'string',
            group: 'banner1'
        },
        {
            name: 'desc1',
            title: 'Desc1',
            type: 'string',
            group: 'banner1'
        },
        {
            name: 'videoLink',
            title: 'Video link',
            type: 'string',
            group: 'banner1'
        },
        {
            name: 'desc2',
            title: 'Desc2',
            type: 'string',
            group: 'banner2'
        },
        {
            name: 'smallText1',
            title: 'SmallText1',
            type: 'string',
            group: 'banner1'
        },
        {
            name: 'smallText2',
            title: 'SmallText2',
            type: 'string',
            group: 'banner2'
        },
        {
            name: 'midText1',
            title: 'MidText1',
            type: 'string',
            group: 'banner1'
        },
        {
            name: 'midText2',
            title: 'MidText2',
            type: 'string',
            group: 'banner2'
        },
        {
            name: 'largeText1',
            title: 'LargeText1',
            type: 'string',
            group: 'banner2'
        },
        {
            name: 'featuredTitle',
            title: 'Featured Title',
            type: 'string',
        },
        {
            name: 'featuredDescription',
            title: 'Featured Description',
            type: 'string',
        },
        {
            name: 'servicesTitle',
            title: 'Services Title',
            type: 'string',
        },
        {
            name: 'servicesDescription',
            title: 'Services Description',
            type: 'string',
        },
    ]
}