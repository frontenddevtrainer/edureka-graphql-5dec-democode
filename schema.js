const { gql } = require("apollo-server-express")

// typeDefs
const schema = gql`

    type Offer {
        type : String,
        percent: Int,
        isActive: Boolean,
        id: Int
    }

    type Query {
        offers : [Offer],
        offer (id: Int): Offer
    }
`
// export default schema;
module.exports = schema;