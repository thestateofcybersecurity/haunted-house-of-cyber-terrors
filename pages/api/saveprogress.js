import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { userId, progress } = req.body;

    try {
      const client = await clientPromise;
      const db = client.db("hauntedHouse");

      const result = await db.collection("users").updateOne(
        { userId: userId },
        { $set: { progress: progress } },
        { upsert: true }
      );

      res.status(200).json({ message: 'Progress saved successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error saving progress' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
