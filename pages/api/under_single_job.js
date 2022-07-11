import { connectToDatabase } from "../../middleware/database";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const jobs = await db
    .collection("jobs")
    .find({'stadt': 'Berlin'})    
    .limit(2)
    .toArray();

  res.json(jobs);
};