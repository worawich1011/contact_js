const express = require('express');
const controllersTecher = require('../controllers/teacher')
const teacherModel = require('../models/teacher');
const route = express.Router();

route.get('/', controllersTecher.getteacher);
route.post('/', controllersTecher.createteacher);
route.delete('/:id',controllersTecher.deleteTeacher);

route.get('/find/:keyword', async (req, res) => {
    
    let keyword = req.params.keyword;
    
    let result = await teacherModel.find({
        $or: [
            { nameTH: { $regex: keyword, $options: 'i' } },
            { name: { $regex: keyword, $options: 'i' } },
            { email: { $regex: keyword, $options: 'i' } },
            { group: { $regex: keyword, $options: 'i' } }
        ]
    });

    res.status(200).json({...result});
});


module.exports = route;