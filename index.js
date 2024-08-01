const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 9000;
const SECRET = process.env.SECRET;
const uri = process.env.MONGO_URI;

const connectToDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log('connected to DB');
    } catch (error) {
        console.log(error);
    }
};

connectToDB();

//middleware 
app.use(express.json());
app.use('/api/character', require('./routes/characterRouter'))

app.use((err, req, res, next) => {
    console.log(err);

    return res.send({ errMsg: err.message });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
