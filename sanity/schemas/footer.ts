export default {
    name: 'footer',
    title: 'Footer',
    type: 'document',
    fields: [
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'termsAndConditions',
            title: 'Terms And Conditions',
            type: 'string'
        },
        {
            name: 'policies',
            title: 'Policies',
            type: 'string'
        },
        {
            name: 'legal',
            title: 'Legal',
            type: 'string'
        },
        {
            name: 'support',
            title: 'Support',
            type: 'string'
        }
    ]
}