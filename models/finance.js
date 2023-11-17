//importing mongoose
const mongoose = require('mongoose')

//Defining Schema
const financeSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email_ID: {
        type: String,
        required: true
    },
    Phone: {
        type: String,
        required: true
    },
    Outelet:{
        type: String,
        required: true
    }, 
    Message:{
        type: String,
        required: true
    },
    Model:{
        type: String,
        required: true
    },
    Purchase_Time: {
        type: String,
        required: true
    },
    Loan_Amount: {
        type: String,
        required: true
    },
    Loan_Duration_In_Years: {
        type: String,
        required: true
    }
})

const FinanceData = mongoose.model('form_data', financeSchema, 'Renuka_finance' )

module.exports = FinanceData;
