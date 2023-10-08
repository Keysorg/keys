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
            name: 'smallText1',
            title: 'Small Text',
            type: 'string'
        },
        {
            name: 'midText1',
            title: 'Mid Text',
            type: 'string'
        },
        {
            name: 'buttonText1',
            title: 'Button Text',
            type: 'string'
        }
    ]
}