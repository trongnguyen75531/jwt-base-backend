import mongoose from 'mongoose';

const connectMongoose = async () => {
   try {
      await mongoose.connect(`${process.env.MONGO_DB_URL}/jwt_nodejs`);
      console.log('Connection successfully!');
   } catch (error) {
      console.log('Connection failed!');
      console.log(error);
   }
};

export default connectMongoose;