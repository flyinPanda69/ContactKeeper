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
        });

        console.log("MongoDB connected");
    }catch(err){

    }
 
    .then(() => console.log('MongoDB connected'))
    .catch((err) => {
      
    });
};

module.exports = connectDB;
