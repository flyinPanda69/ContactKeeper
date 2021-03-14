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
        console.log(err.message);
        process.exit(1);
    }
 
    .then(() => console.log('MongoDB connected'))
    .catch((err) => {
      
    });
};

module.exports = connectDB;
