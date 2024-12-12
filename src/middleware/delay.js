const delay = (req, res, next) => {
   setTimeout(() => {
      if (req.headers.authorization) {
         console.log(req.headers.authorization.split(" ")[1]);
      }
      next();
   }, 1000);
};

export default delay;