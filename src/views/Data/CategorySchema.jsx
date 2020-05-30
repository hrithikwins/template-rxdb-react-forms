export const categorySchema = {
    title: 'Category Shema',
    description: 'Database schema for use of category master',
    version: 0,
    type: 'object',
    properties: {
        id: {
            type: 'string',
            primary: true
        },
        name: {
            type: 'string'
        },
        discountPercentage: {
            type: 'string'
        }
    }
}
