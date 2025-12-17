const { neon } = require('@neondatabase/serverless');

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") return { statusCode: 405 };

  const sql = neon(process.env.NETLIFY_DATABASE_URL);
  const { playlistID, songID } = JSON.parse(event.body);

  try {
    await sql`
      INSERT INTO PlaylistSongs (playlistID, songID)
      VALUES (${playlistID}, ${songID})
      ON CONFLICT DO NOTHING; -- Simply skips if the link already exists
    `;

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Song added to playlist!" }),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};