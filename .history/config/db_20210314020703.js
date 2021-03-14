const mongoose = required('mongoose');
const config = required('config');

const db = config.get('mongoURI');

const connectDB = () => {
    mongoose.connect(db, {
        useNewUrlParser : true,
        useCreateIndex : true,
        useFindAndModify: true
    }).then(()=> console.log("MongoDB connected"))
}