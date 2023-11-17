const express = require('express')
const formData = require('../models/finance');
const FinanceData = require('../models/finance');
const router = express.Router() 

//route to handle form submission
router.post("/validForm", async(req,res)=>{
   try{
    console.log('Recieved a POST request to /validForm', req.body);
    
    //Destructure form data
    const {Name, Email_ID, Phone,  Outelet, Message, Model, Purchase_Time, Loan_Amount, Loan_Duration_In_Years} = req.body;

    //create new formData document and save it to the database
    const financeData = new FinanceData({
        Name,
         Email_ID, 
         Phone,  
         Outelet, 
         Message, 
         Model,
         Purchase_Time,
         Loan_Amount, 
         Loan_Duration_In_Years
    });
    const savedData = await financeData.save();
        console.log("Data Saved Successfully", savedData);

        //Fetch all data after saving 
        const allData = await FinanceData.find();
        console.log('Data read', allData)
    }
    catch(err) {
        console.error('Error', err);
        res.status(500).send('Internal server error');
    }
});
module.exports = router;