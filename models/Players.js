const mongoose = require('mongoose');

const playersSchema = new mongoose.Schema(
    {
       name: {
        type: String,
        required: [true, "Please provide a name"]
       }, 

       image: {
        type: String,
        required: [true, "Please provide the URL for an image"],
        unique: [true, "I don't want the same player picture multiple times"]
       },
       
       team: {
        type: String,
        required: [true, "Please provide a team"]
       },

    },
   {
       timestamps: true
   }

);


const Players = mongoose.model('Players', playersSchema)

module.exports = Players;