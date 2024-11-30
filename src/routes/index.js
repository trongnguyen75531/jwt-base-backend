import homeRouter from './web/homeRouter.js';
import userRouterAPI from './apis/handleUserAPI.js';


const setRoutes = app => {
   app.use('/', homeRouter);
   app.use('/v1/api', userRouterAPI);
};

export default setRoutes;