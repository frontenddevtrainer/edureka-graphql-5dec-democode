const { GetOffers } = require("./offers");

const resolvers = {
    Query : {
        offers : GetOffers
    }
}

module.exports = resolvers;