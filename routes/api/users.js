const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// 
router.post('/', [
    check('name', 'Name required').not().isEmpty(),
    check('email', 'Include Email').isEmail(),
    check('password', 'Please enter a pass with 6 or more chars').isLength({ min: 6 })
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    res.send('User route');
});

module.exports = router;