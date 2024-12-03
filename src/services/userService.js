import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/userSchema.js';

export const createUserService = async (formData, next) => {
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

export const handleLoginService = async (formData, next) => {
   const { email, password } = formData;

   try {
      const user = await User.findOne({ email });
      if (!user) {
         return { code: 1, message: 'Email/Password không hợp lệ' }
      }

      const isMatchPassword = await bcrypt.compare(password, user.password);
      if (!isMatchPassword) {
         return { code: 2, message: 'Email/Password không hợp lệ' }
      } else {
         const payload = { email }

         const token = jwt.sign(
            payload,
            process.env.SECRET_KEY,
            { expiresIn: process.env.JWT_EXPIRES }
         );

         return { token, user: { email } }
      }

   } catch (error) {
      console.log('Có lỗi, thử lại tác vụ khác.');
      next(error);
   }
}

export const getUserService = async () => {
   return await User.find();
};

