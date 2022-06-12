import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../middleware/database";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const id = req.query.job
  

  const jobs = await db
    .collection("jobs")
    .findOne({_id: ObjectId(id)})
    

  res.json(jobs);
};