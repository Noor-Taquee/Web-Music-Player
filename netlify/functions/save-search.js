const { neon } = require('@neondatabase/serverless');

exports.handler = async (event) => {
  const sql = neon(process.env.NETLIFY_DATABASE_URL);
  const { userID, queryText, songID } = JSON.parse(event.body);

  try {
    await sql`
      INSERT INTO SearchHistory (userID, queryText, songID)
      VALUES (${userID}, ${queryText}, ${songID});
    `;
    return { statusCode: 200, body: "History saved" };
  } catch (error) {
    return { statusCode: 500, body: error.message };
  }
};