const { gql } = require("apollo-server-express")

// typeDefs
const schema = gql`

    input OfferInput {
        type : String,
        percent: Int,
        isActive: Boolean,
    }

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

    type Mutation {
        addOffer(offer: OfferInput ): Offer
    }
`
// export default schema;
module.exports = schema;