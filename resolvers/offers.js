const axios = require("axios");

async function GetOffers(){
    // return axios.get("http://localhost:3300/offers").then(( response )=>{ return response.data });
    const response = await axios.get("http://localhost:3300/offers");
    const { data } = response;
    return data;
}

function GetOfferById(context, args){
    
}

function AddOffer(context, args){
    
}

module.exports = {
    GetOffers,
    GetOfferById,
    AddOffer
}