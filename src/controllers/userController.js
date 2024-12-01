import createUserService from '../services/userService.js';

const userController = {
   async createUserAPI(req, res, next) {
      const formData = req.body;
      const userInfo = await createUserService(formData, next);
      res.json(userInfo);
   },

   getUserAPI(req, res, next) {
      res.json({
         id: '24550048',
         email: 'trongnguyen@gmail.com',
         username: 'trongnguyendev'
      });
   }
};

export default userController;