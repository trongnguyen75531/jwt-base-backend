import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
   res.render('layouts/main', { title: 'trongnguyendev' });
});

export default router;