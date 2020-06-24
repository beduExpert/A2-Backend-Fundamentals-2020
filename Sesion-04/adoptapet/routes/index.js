var router = require('express').Router();

router.get('/', (req, res)=>{
  res.send('welcome to adoptapet api');
})
router.use('/usuarios', require('./usuarios'));
router.use('/anunciantes', require('./anunciantes'));
router.use('/solicitudes', require('./solicitudes'));
router.use('/mascotas', require('./mascotas'));


module.exports = router;