const { GetOffers, GetOfferById, AddOffer } = require("./offers");

const resolvers = {
    Query : {
        offers : GetOffers,
        offer: GetOfferById
    },
    Mutation: {
        addOffer : AddOffer
    }
}

module.exports = resolvers;