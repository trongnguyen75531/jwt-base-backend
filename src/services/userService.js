import bcrypt, { compareSync } from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/userSchema.js';

export const createUserService = async (formData, next) => {
   const { email, password } = formData;
   try {
      const user = await User.findOne({ email });

      if (user) {
         return {
            statusCode: 400,
            message: 'Email đã tồn tại. Vui lòng chọn email khác.'
         }
      }

      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const userInfo = await User.create({ ...formData, password: hashedPassword });
      console.log('Đăng ký tài khoản thành công');

      return userInfo;
   } catch (error) {
      console.log('Đăng ký tài khoản thất bại');
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

         return { code: 0, token, user: { email } }
      }

   } catch (error) {
      console.log('Có lỗi, thử lại tác vụ khác.');
      next(error);
   }
}

export const getUsersService = async () => {
   return await User.find();
};

