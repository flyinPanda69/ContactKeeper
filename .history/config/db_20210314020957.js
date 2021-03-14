const mongoose = required('mongoose');
const config = required('config');

const db = config.get('mongoURI');

const connectDB = async() => {
    try{

    }catch(err){

    }
 
    .then(() => console.log('MongoDB connected'))
    .catch((err) => {
      console.log(err.message);
      process.exit(1);
    });
};

module.exports = connectDB;
