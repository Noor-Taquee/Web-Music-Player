const { neon } = require('@neondatabase/serverless');

exports.handler = async (event) => {
  // Only allow POST requests for security
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const sql = neon(process.env.NETLIFY_DATABASE_URL);

  try {
    const { username, password } = JSON.parse(event.body);

    // 1. Fetch the user and their liked songs in one go using a JOIN
    // This replaces your manual searching through 'UserList.json'
    const userData = await sql`
      SELECT 
        u.userID, u.username, u.profileName, u.password_hash,
        array_agg(l.songID) FILTER (WHERE l.songID IS NOT NULL) as favorites
      FROM Users u
      LEFT JOIN Likes l ON u.userID = l.userID
      WHERE u.username = ${username}
      GROUP BY u.userID;
    `;

    // 2. Check if user exists
    if (userData.length === 0) {
      return { 
        statusCode: 401, 
        body: JSON.stringify({ error: "User not found" }) 
      };
    }

    const user = userData[0];

    // 3. Verify password (matches your old plain-text check for now)
    if (user.password_hash !== password) {
      return { 
        statusCode: 401, 
        body: JSON.stringify({ error: "Invalid password" }) 
      };
    }

    // 4. Success! Return the data to the frontend
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Login successful",
        user: {
          userid: user.userid,
          username: user.username,
          profilename: user.profilename,
          favorites: user.favorites || []
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