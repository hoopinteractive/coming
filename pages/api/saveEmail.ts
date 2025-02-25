import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('Request method:', req.method); // Add logging

  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Allow only Google emails
    const emailDomain = email.split('@')[1];
    if (emailDomain !== 'gmail.com') {
      return res.status(400).json({ error: 'Only Google emails are allowed' });
    }

    try {
      const client = await clientPromise;
      const db = client.db('comingsoon'); // Change to your actual database name
      const collection = db.collection('emails');

      // Check if the email already exists
      const existingEmail = await collection.findOne({ email });
      if (existingEmail) {
        return res.status(400).json({ error: 'Email already exists' });
      }

      // Insert new email
      await collection.insertOne({ email });

      return res.status(200).json({ message: 'Email saved successfully' });
    } catch (error) {
      console.error('Database error:', error);
      return res.status(500).json({ error: 'Failed to save email' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}