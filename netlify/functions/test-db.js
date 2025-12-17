const { neon } = require('@neondatabase/serverless');

exports.handler = async (event, context) => {
  // Using the variable from your screenshot
  const sql = neon(process.env.NETLIFY_DATABASE_URL);

  try {
    const result = await sql`SELECT NOW();`;
    
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: "Successfully connected to Neon!", 
        dbTime: result[0].now 
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};