const mongoose = required('mongoose');
const config = required('config');

const db = config.get('mongoURI');

const connectDB = () => {
    mongoose.connect(d)
}