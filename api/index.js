const express=require("express");
const app=express()
const { MongoClient } = require('mongodb');
const cors=require("cors")
const bodyParser=require("body-parser") 
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended : true}))
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'Demo';
 client.connect();
  const db = client.db(dbName); 
  const collection = db.collection('ads');

    app.listen(3001, () => {    
      console.log("Server is running at port 3001");
    });
    app.get("/ads", async(req,res)=> {

                const findResult =  await collection.find({}).toArray();
            res.send(findResult)
    
    })
    app.get("/ads/:keyword", async(req,res)=> {
       
       const keyword=new RegExp(req.params.keyword , 'i');
       //console.log(keyword)
       const matchingAds= await collection.aggregate([{$lookup:{from:"companies",localField:"companyId",foreignField:"_id",as:"companyDetails"}},{$match:{$or:[{primaryText:{$regex:keyword}},{headline:{$regex:keyword}},{description:{$regex:keyword}},{companyDetails:{$elemMatch:{name:{$regex:keyword}}}}]}}]).toArray();
       res.send(matchingAds)

})