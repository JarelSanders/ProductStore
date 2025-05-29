// const mongoose = require('mongoose');
import mongoose from 'mongoose';


mongoose
  .connect("mongodb://localhost:27017/login", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB Connection Error ", err));

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

export const User = mongoose.model('User', userSchema);
// module.exports = User;
