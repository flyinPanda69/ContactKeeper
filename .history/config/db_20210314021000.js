const mongoose = required('mongoose');
const config = required('config');

const db = config.get('mongoURI');

const connectDB = async() => {
    try{
        mongoose
        .connect(db, {
          useNewUrlParser: true,
          useCreateIndex: true,
          useFindAndModify: true,
        })
    }catch(err){

    }
 
    .then(() => console.log('MongoDB connected'))
    .catch((err) => {
      console.log(err.message);
      process.exit(1);
    });
};

module.exports = connectDB;
