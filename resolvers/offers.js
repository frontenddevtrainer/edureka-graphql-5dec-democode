const axios = require("axios");

async function GetOffers(){
    // return axios.get("http://localhost:3300/offers").then(( response )=>{ return response.data });
    const response = await axios.get("http://localhost:3300/offers");
    const { data } = response;
    return data;
}

function GetOfferById(context, args){
    
}

async function AddOffer(context, args){
    console.log(args);
    const response = await axios.post("http://localhost:3300/offers", args.offer);
    const { data } = response;
    return data;
}

module.exports = {
    GetOffers,
    GetOfferById,
    AddOffer
}