const { neon } = require('@neondatabase/serverless');

exports.handler = async (event) => {
  const sql = neon(process.env.NETLIFY_DATABASE_URL);
  const songId = event.queryStringParameters.id;

  try {
    // This SQL query joins 3 tables based on your Match table
    const trackInfo = await sql`
      SELECT 
        s.songName, s.songFile, 
        art.artistName, 
        alb.albumName 
      FROM Songs s
      JOIN Match m ON s.songID = m.songID
      JOIN Artists art ON m.artistID = art.artistID
      LEFT JOIN Albums alb ON m.albumID = alb.albumID
      WHERE s.songID = ${songId}
    `;

    return {
      statusCode: 200,
      body: JSON.stringify(trackInfo[0]),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};