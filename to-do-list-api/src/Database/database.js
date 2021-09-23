import mongoose from 'mongoose';
import config from '../config';

(async () => {
  try {
    const mongooseOptions = {
      user: config.MONGO_USER,
      password: config.MONGO_PASSWORD,
    };
    const db = await mongoose.connect(
      `mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`
    );
    console.log('database is connected to', db.connection.name);
  } catch (error) {
    console.warn('DataBase no connected');
    console.error(new Error(error));
  }
})();
