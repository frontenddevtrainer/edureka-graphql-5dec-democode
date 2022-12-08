const { gql } = require("apollo-server-express")

// typeDefs
const schema = gql`

    type Offers {
        type : String,
        percent: Int,
        isActive: Boolean,
        id: Int
    }

    type Query {
        offers : [Offers]
    }
`
// export default schema;
module.exports = schema;