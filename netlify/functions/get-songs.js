const { neon } = require('@neondatabase/serverless');

exports.handler = async (event) => {
  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: "Method Not Allowed"
    };
  }

  const sql = neon(process.env.NETLIFY_DATABASE_URL);

  try {
    const songs = await sql`
      SELECT
        s.songid, s.songname, s.songfile, s.songduration,
        ar.artistname,
        al.albumname, al.albumimage
      FROM songs s
      JOIN match m ON s.songid = m.songid
      JOIN artists ar ON m.artistid = ar.artistid
      JOIN albums al ON m.albumid = al.albumid`;

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(songs)
    };

  } catch (error) {
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: "failed to fetch songs" }),
    };
  }
};