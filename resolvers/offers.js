function GetOffers(){
    return [
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
}

module.exports = {
    GetOffers
}