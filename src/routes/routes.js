const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => 
    res.json({ 
        message: 'Hello World asdasdsad 7'
    })
);

module.exports = router;
