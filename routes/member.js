const express = require('express');
const { getmember, createmember , deletemember, loginMember} = require('../controllers/member')
const route = express.Router();

route.get('/',getmember);
route.post('/login', loginMember);
route.post('/',createmember);
route.post('/:id',deletemember);

module.exports = route;