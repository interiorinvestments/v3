/* This is a database connection function */
import mongoose from 'mongoose';

const connection = {}; /* creating connection object */

async function dbConnect() {
  /* check if we have connection to our database */
  if (connection.isConnected) {
    return;
  }

  /* connecting to our database */
  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
