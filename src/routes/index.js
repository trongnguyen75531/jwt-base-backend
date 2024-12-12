import siteRouter from './web/siteRouter.js';
import userRouterAPI from './apis/userRouter.js';
import delay from '../middleware/delay.js';

const setRoutes = app => {
   app.use('*', delay);
   app.use('/', siteRouter);
   app.use('/v1/api', userRouterAPI);
};

export default setRoutes;