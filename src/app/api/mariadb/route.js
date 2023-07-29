import { createPool } from 'mariadb';
import { NextResponse } from 'next/server';



const pool = createPool({
  host: 'localhost',
  user: 'nextApp2',
  password: 'nextApp2p',
  database: 'nextApp2',
  connectionLimit: 5, // Adjust according to your needs
  socketPath : '/run/mysqld/mysqld.sock',
});




export async function GET(req, res) {
  let conn;

  try {
    conn = await pool.getConnection();


    // Perform database operations using the connection (e.g., executing queries)
    return NextResponse.json({message : 'Success'})
    // return res.status(200).json({ message: 'Success' });
  } catch (err) {
    console.error(err);
    return NextResponse.status(500).json({ message: 'Server Error' });
  } finally {
    if (conn) conn.end();
  }
}
