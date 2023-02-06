 require('../models/db');
 const Years = require('../models/year');

exports.listYears = async(req, res) => {

    let { limit } = req.query;
    const limitRecord = parseInt(limit);

    try{
        const year = await Years.find({}).limit(limitRecord);
        res.json(year);
    } catch(err){
        res.status(400).json({message: err});
    } 
}