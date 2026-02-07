const { neon } = require('@neondatabase/serverless');
const sql = neon(process.env.NETLIFY_DATABASE_URL);

exports.handler = async (event) => {
  
  // Only allow POST requests for security
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { username, password } = JSON.parse(event.body);

    const userData = await sql`select * from users where username = ${username}`;

    // Check if user exists
    if (userData.length === 0) {
      return {
        statusCode: 401,
        body: JSON.stringify({ error: "User not found" })
      };
    }

    const user = userData[0];

    if (user.password_hash !== password) {
      return {
        statusCode: 401,
        body: JSON.stringify({ error: "Invalid password" })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Login successful",
        user: {
          userid: user.userid,
          username: user.username,
          profilename: user.profilename
        }
      }),
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};