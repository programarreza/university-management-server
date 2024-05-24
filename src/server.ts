import app from './app';
import config from './app/config';
import mongoose from 'mongoose';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`server is running on port: ${config.port}`);
      console.log('Connect DB Successfully ');
    });
  } catch (error) {
    console.log(error);
  }
}
main();
