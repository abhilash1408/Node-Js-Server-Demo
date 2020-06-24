const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    Name : String,
    Price : Number,
    Discount : Number,
    Combos : [
        {
            itemId : mongoose.Types.ObjectId,
            Name : String,
            Price : Number,
            Discount : Number
        }
    ]
})

const ItemModel = mongoose.model("Item", ItemSchema, "Items")

module.exports = ItemModel;