const { neon } = require('@neondatabase/serverless');

exports.handler = async (event) => {
  const sql = neon(process.env.NETLIFY_DATABASE_URL);
  
  // Get the search term from the URL (e.g., /search?term=rock)
  const searchTerm = event.queryStringParameters.term;

  if (!searchTerm) {
    return { statusCode: 400, body: "Please provide a search term" };
  }

  try {
    // This searches for the term inside album names or genres
    // The % symbols are wildcards (like MySQL LIKE)
    const results = await sql`
      SELECT * FROM Albums 
      WHERE albumName ILIKE ${'%' + searchTerm + '%'} 
      OR albumGenre ILIKE ${'%' + searchTerm + '%'};
    `;

    return {
      statusCode: 200,
      body: JSON.stringify(results),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};