const { neon } = require('@neondatabase/serverless');

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") return { statusCode: 405 };

  const sql = neon(process.env.NETLIFY_DATABASE_URL);
  const { userID, songID } = JSON.parse(event.body);

  try {
    // 1. Increment the total stream count for the song
    await sql`
      UPDATE Songs 
      SET songStreams = COALESCE(songStreams, 0) + 1 
      WHERE songID = ${songID}
    `;

    // 2. Optional: If you want a specific "History" table, you'd insert here.
    // For now, let's just track the stream count.

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Play registered" }),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};