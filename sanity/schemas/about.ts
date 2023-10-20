export default {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        {
            name: 'image1',
            title: 'Image 1',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'image2',
            title: 'Image 2',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'image3',
            title: 'Image 3',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'image4',
            title: 'Image 4',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'values',
            title: 'Values',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'inline',
                    fields: [
                        {
                            name: 'name',
                            title: 'Name',
                            type: 'string'
                        },
                        {
                            name: 'desc',
                            title: 'Description',
                            type: 'string'
                        }
                    ]
                }
            ]
        },
        {
            name: 'members',
            title: 'Members',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'inline',
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
                            name: 'position',
                            title: 'Position',
                            type: 'string'
                        },
                        {
                            name: 'bio',
                            title: 'Bio',
                            type: 'string'
                        },
                        {
                            name: 'social',
                            title: 'Social Links',
                            type: 'array',
                            of: [
                                {
                                    type: 'object',
                                    name: 'inline',
                                    fields: [
                                        {
                                            name: 'linkedIn',
                                            title: 'LinkedIn',
                                            type: 'string'
                                        },
                                        {
                                            name: 'instagram',
                                            title: 'Instagram',
                                            type: 'string'
                                        },
                                        {
                                            name: 'twitter',
                                            title: 'Twitter',
                                            type: 'string'
                                        }
                                    ]
                                }
                            ]
                        }

                    ]
                }
            ]
        },
        {
            name: 'header1',
            title: 'Header 1',
            type: 'string'
        },
        {
            name: 'header2',
            title: 'Header 2',
            type: 'string'
        },
        {
            name: 'header3',
            title: 'Header3',
            type: 'string'
        },
        {
            name: 'logos',
            title: 'Logos',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            },
        },
    ]
}