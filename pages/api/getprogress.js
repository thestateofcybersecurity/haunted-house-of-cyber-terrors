import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ message: 'Missing userId parameter' });
    }

    try {
      const client = await clientPromise;
      const db = client.db("hauntedHouse");

      const user = await db.collection("users").findOne({ userId: userId });

      if (user && user.progress) {
        res.status(200).json(user.progress);
      } else {
        // If user not found or no progress, return default initial state
        res.status(200).json({
          currentRoom: 0,
          collectedItems: []
        });
      }
    } catch (error) {
      console.error('Error retrieving progress:', error);
      res.status(500).json({ message: 'Error retrieving progress' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
