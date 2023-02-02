 require('../models/db');
 const Years = require('../models/year');

exports.listYears = async(req, res) => {
 
}

async function insertDay(){
    try{
        await Years.insertMany([

            {
                "day": 2022-08-08,
                "event": "yeah he did this hahaa",
                "category": ["Basketball"]
            }

        ])

    }catch (error) {
      console.log(error);
    }
}