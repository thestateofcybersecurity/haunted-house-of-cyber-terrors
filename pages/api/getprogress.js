import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { userId } = req.query;

    try {
      const client = await clientPromise;
      const db = client.db("hauntedHouse");

      const user = await db.collection("users").findOne({ userId: userId });

      if (user) {
        res.status(200).json(user.progress);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving progress' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
