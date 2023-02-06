 require('../models/db');
 const Years = require('../models/year');

exports.listYears = async(req, res) => {

    let { limit = 3, page = 1  } = req.query;
    const limitRecord = parseInt(limit);
     const skip = (page -1) * limit;

    try{
        const year = await Years.find({}).limit(limitRecord).skip(skip);
        res.json(year);
    } catch(err){
        res.status(400).json({message: err});
    } 
}