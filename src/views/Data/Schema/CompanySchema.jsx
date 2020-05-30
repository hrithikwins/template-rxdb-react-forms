export const companySchema = {
    title: 'Company Shema',
    description: 'Database schema for use of Company Master',
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
// If two different ids are added at the same time
