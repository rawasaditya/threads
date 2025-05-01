import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "No token provided" });

  const client = await clientPromise;
  const db = client.db("threads");
  const session = await db.collection("sessions").findOne({ token });

  if (!session) {
    return res.status(401).json({ message: "Invalid session" });
  }
  
  res.status(200).json({ message: "Valid session" });
}
