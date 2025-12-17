const { neon } = require('@neondatabase/serverless');

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") return { statusCode: 405 };

  const sql = neon(process.env.NETLIFY_DATABASE_URL);
  const { fullName, username, password } = JSON.parse(event.body);

  try {
    // 1. Insert into the Users table (Neon)
    const result = await sql`
      INSERT INTO Users (username, profileName, password_hash)
      VALUES (${username}, ${fullName}, ${password})
      RETURNING userID;
    `;

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "User created!", userID: result[0].userid }),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};