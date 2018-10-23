const {Course} = require('./models/course');
const {Subject} = require('./models/subject');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const db=require('./db.js');

router.get('/usercourse', async (req, res) => {
  let course=Course.collection.collectionName;
let subject=Subject.collection.collectionName;
/*const result=course.aggregate([
    {
        $lookup: {
           from: "subjects",
           localField: "mo",
           foreignField: "_id",
           as: "userRole"
        }
    }
    
]);*/

Subject.aggregate([
        {$group : {_id : "$course_id", num_tutorial : {$sum : 1}}}
    ], 
    /*{ 
        "allowDiskUse" : false
    },*/
    function(err,result) {
      
   if(err)

    
    throw err;
else
res.send(result);

	});
});
router.get('/usercoursewise', async (req, res) => {
  let course=Course.collection.collectionName;
let subject=Subject.collection.collectionName;
Course.aggregate([
    {
        $lookup: {
           from: "users",
           localField: "mo",
           foreignField: "_id",
           as: "userRole"
        }
    },
    {
        $unwind: "$userRole"
    },
    
    
],function(err,result) {
      
   if(err)

    
    throw err;
else
res.send(result);

  });

/*Subject.aggregate([
        {$group : {_id : "$course_id", num_tutorial : {$sum : 1}}}
    ], 
    /*{ 
        "allowDiskUse" : false
    },*/
    /*function(err,result) {
      
   if(err)

    
    throw err;
else
res.send(result);

  });

  ----------
  properties.find(searchParams).toArray(function (err, result) {
     var i, count;
     for (i = 0, count = result.length; i < count; i++) {
       propArray.push(new models.propertyModel(result[i]));
     }
     db.close();
     return res.json(propArray);
   });*/
});
module.exports = router; 
