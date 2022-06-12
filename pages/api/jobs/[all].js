import { connectToDatabase } from "../../../middleware/database";


export default async (req, res) => {
  const { db } = await connectToDatabase();
  const keyword = req.query.keyword
  const long = req.query.long
  const lat = req.query.lat 
  
  if(keyword && !long && !lat) {
    const jobs = await db
    .collection("jobs")
    .aggregate([
      {
        "$search": {                      
                "text": {
                  "query": keyword,
                  "path": "title"
                }

          
        }
        
      }])
    .toArray();

    res.json({jobs});

  }

  

  

};