const mongoose = required('mongoose');
const config = required('config');

const db = config.get('mongoURI');

const connectDB = async() => {
    try{

    }catch(err)
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => {
      console.log(err.message);
      process.exit(1);
    });
};

module.exports = connectDB;
