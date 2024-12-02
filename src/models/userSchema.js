import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
   username: String,
   email: String,
   password: String,
   role: { type: String, default: 'admin' },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
