//importing all the necessary files
const mongoose=require('mongoose');

// Creating Schema for orders
const orderSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
},{
    timestamps: true
});

const order=mongoose.model('order',orderSchema);
module.exports=order;
