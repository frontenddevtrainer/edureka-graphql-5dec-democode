const offers = [
    {
        type: "Laptop",
        id: 1,
        percent: 50,
        isActive: true
    },
    {
        type: "Iphone",
        id: 2,
        percent: 50,
        isActive: true
    }
]

function GetOffers(){
    return offers
}

function GetOfferById(context, args){
    return offers.find((offer)=>{ return offer.id === args.id })
}

function AddOffer(context, args){
    offers.push(args);
    return args
}

module.exports = {
    GetOffers,
    GetOfferById,
    AddOffer
}