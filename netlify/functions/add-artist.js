const { neon } = require('@neondatabase/serverless');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const sql = neon(process.env.NETLIFY_DATABASE_URL);

  try {
    // Parse the data sent from your frontend
    const { name, image, description } = JSON.parse(event.body);

    // SQL Insert (Postgres uses $1, $2, $3 for security against SQL injection)
    const result = await sql`
      INSERT INTO Artists (artistName, artistImage, artistDescription)
      VALUES (${name}, ${image}, ${description})
      RETURNING artistID;
    `;

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: "Artist added successfully!", 
        id: result[0].artistid 
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};