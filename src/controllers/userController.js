import {
   createUserService,
   getUsersService,
   handleLoginService

} from '../services/userService.js';

const userController = {
   async createUserAPI(req, res, next) {
      const formData = req.body;
      const userInfo = await createUserService(formData, next);
      if (userInfo.statusCode === 400) {
         res.status(400).json(userInfo);
      } else {
         res.json(userInfo);
      }
   },

   async handleLoginAPI(req, res, next) {
      const formData = req.body;
      const resData = await handleLoginService(formData, next);
      res.json(resData);
   },

   async getUsersAPI(req, res, next) {
      const listUsers = await getUsersService(next);
      res.json(listUsers);
   },


};

export default userController;