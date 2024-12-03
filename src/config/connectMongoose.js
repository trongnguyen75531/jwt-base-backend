import mongoose from 'mongoose';

const connectMongoose = async () => {
   try {
      await mongoose.connect(`${process.env.MONGO_DB_URL}/jwt_nodejs`);
      console.log('Kết nối tới Database thành công');
   } catch (error) {
      console.log('Kết nối DB thất bại.');
      console.log(error);
   }
};

export default connectMongoose;