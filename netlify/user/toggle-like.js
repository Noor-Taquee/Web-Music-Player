const { neon } = require('@neondatabase/serverless');

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") return { statusCode: 405 };

  const sql = neon(process.env.NETLIFY_DATABASE_URL);
  const { userID, songID } = JSON.parse(event.body);

  try {
    // Check if the like already exists
    const existing = await sql`
      SELECT * FROM Likes WHERE userID = ${userID} AND songID = ${songID}
    `;

    if (existing.length > 0) {
      // If it exists, remove it (Unlike)
      await sql`DELETE FROM Likes WHERE userID = ${userID} AND songID = ${songID}`;
      return { statusCode: 200, body: JSON.stringify({ action: "unliked" }) };
    } else {
      // If it doesn't exist, add it (Like)
      await sql`INSERT INTO Likes (userID, songID) VALUES (${userID}, ${songID})`;
      return { statusCode: 200, body: JSON.stringify({ action: "liked" }) };
    }
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};