const siteController = {
   getHomePage(req, res) {
      res.render('layouts/main', { title: 'trongnguyendev' });
   }
};

export default siteController;