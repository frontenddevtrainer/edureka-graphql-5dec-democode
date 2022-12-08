const { GetOffers, GetOfferById } = require("./offers");

const resolvers = {
    Query : {
        offers : GetOffers,
        offer: GetOfferById
    }
}

module.exports = resolvers;