import {
   createUserService,
   getUserService,
   handleLoginService

} from '../services/userService.js';

const userController = {
   async createUserAPI(req, res, next) {
      const formData = req.body;
      const userInfo = await createUserService(formData, next);
      res.json(userInfo);
   },

   async handleLoginAPI(req, res, next) {
      const formData = req.body;
      const resData = await handleLoginService(formData, next);
      res.json(resData);
   },

   async getUserAPI(req, res, next) {
      const user = await getUserService();
      res.json(user);
   },


};

export default userController;