const teacherModel = require('../models/teacher');


exports.findteacher = async () =>{
    return await teacherModel.find();
}

exports.searchTeacher = async (keyword) => {
    return await teacherModel.find({
        $or: [
            { nameTH: { $regex: keyword, $options: 'i' } },
            { name: { $regex: keyword, $options: 'i' } },
            { email: { $regex: keyword, $options: 'i' } },
            { group: { $regex: keyword, $options: 'i' } }
        ]
    });
}

exports.createteacher = async (name,email,nameTH,group) =>{
    const teacher = new teacherModel({
        name: name,
        email: email,
        nameTH: nameTH,
        group: group
    });
    return await teacher.save();
}
