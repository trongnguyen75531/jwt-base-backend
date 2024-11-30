import siteRouter from './web/siteRouter.js';
import userRouterAPI from './apis/handleUserAPI.js';


const setRoutes = app => {
   app.use('/', siteRouter);
   app.use('/v1/api', userRouterAPI);
};

export default setRoutes;