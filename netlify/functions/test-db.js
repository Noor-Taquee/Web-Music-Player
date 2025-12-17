import { neon } from '@neondatabase/serverless';

export const handler = async (event, context) => {
  // This looks for a variable we will set in the Netlify Dashboard later
  const sql = neon(process.env.NETLIFY_DATABASE_URL);

  try {
    // A simple query to get the current time from Postgres
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