const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,

    image: {
        filename: {
            type: String,
            default: "listingimage",
        },
        url: {
            type: String,
            default: "https://img.freepik.com/premium-photo/beach-goa-india_78361-4735.jpg?w=2000",
        }
    },

    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;