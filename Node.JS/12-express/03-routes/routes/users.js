const express = require('express');

const {
    getUsersHandler,
    postUsersHandler,
    getSingleUserHandler,
} = require('../controllers/users');

const router = express.Router();

router.get('/', getUsersHandler);
router.post('/', postUsersHandler);
router.get('/userID', getSingleUserHandler);

module.exports = router;
