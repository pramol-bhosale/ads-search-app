
module.exports = function (app) {

    const collection = require('./MongoConnect')("Demo", "ads");

    app.get("/ads", async (req, res) => {
        const findResult = await collection.find({}).toArray();
        res.send(findResult)
    })
    app.get("/ads/:keyword", async (req, res) => {
        const keyword = new RegExp(req.params.keyword, 'i');
        //console.log(keyword)
        const matchingAds = await collection.aggregate([{ $lookup: { from: "companies", localField: "companyId", foreignField: "_id", as: "companyDetails" } }, { $match: { $or: [{ primaryText: { $regex: keyword } }, { headline: { $regex: keyword } }, { description: { $regex: keyword } }, { companyDetails: { $elemMatch: { name: { $regex: keyword } } } }] } }]).toArray();
        res.send(matchingAds)
    })
}