 require('../models/db');
 const Years = require('../models/year');

exports.listYears = async(req, res) => {
    try{
        const year = await Years.find({});
        res.json(year);
    } catch(err){
        res.status(400).json({message: err});
    }
}