const mongoose = require('mongoose');

const uri = "mongodb://127.0.0.1:27017/RenukaAutomotive_finance";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
        // Further code related to MongoDB operations
    })
    .catch(error => {
        console.error("Error connecting to MongoDB:", error);
    });
