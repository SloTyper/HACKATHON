const express = require("express");
const router = express.Router();
const Book = require("../models/book");

function calcCrow(lat1, lon1, lat2, lon2) {
    var R = 6371 // km
    var dLat = toRad(lat2 - lat1)
    var dLon = toRad(lon2 - lon1)
    var lat1 = toRad(lat1)
    var lat2 = toRad(lat2)

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2)
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    var d = R * c
    return d
}

// Converts numeric degrees to radians
function toRad(Value) {
    return Value * Math.PI / 180
}

function getSortedDistance(books){
    for(let i = 0; i<books.length; i++){
        let arr = [];
        let d = calcCrow(location.lattitude, location.longitude, books[i].lattitude, books[i].longitude)
    
        Object.assign(books[i], d)
        arr.push()
    }
    arr.sort()
}

router.get("/book/", async(req, res)=>{
    const {bookName, location} = req.body;
    let books = await Book.find({name: bookName}).lean;
    books = getSortedDistance(books);
    
});



module.exports = router;