import bcrypt from 'bcrypt';
import User from '../models/userSchema.js';

const createUserService = async (formData, next) => {
   const { password } = formData;
   try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const userInfo = await User.create({ ...formData, password: hashedPassword });
      console.log('User đăng ký tài khoản thành công');

      return userInfo;
   } catch (error) {
      console.log('User đăng ký tài khoản thất bại');
      next(error);
   }
};

export default createUserService;


