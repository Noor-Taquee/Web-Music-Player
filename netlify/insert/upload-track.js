const { neon } = require('@neondatabase/serverless');

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") return { statusCode: 405 };

  const sql = neon(process.env.NETLIFY_DATABASE_URL);
  const { songData, artistID, albumID } = JSON.parse(event.body);

  try {
    // 1. Insert the Song and get the new ID
    const newSong = await sql`
      INSERT INTO Songs (songName, songImage, songFile, songDuration, albumID, songGenre, songYear, songLanguage, songCountry)
      VALUES (${songData.name}, ${songData.image}, ${songData.file}, ${songData.duration}, ${albumID}, ${songData.genre}, ${songData.year}, ${songData.language}, ${songData.country})
      RETURNING songID;
    `;

    const newID = newSong[0].songid;

    // 2. Create the connection in the Match table
    await sql`
      INSERT INTO Match (songID, artistID, albumID)
      VALUES (${newID}, ${artistID}, ${albumID});
    `;

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Song and Match created!", songID: newID }),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};