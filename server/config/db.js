import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MongoDB connection string is missing in .env file');
    }

    if (!process.env.MONGO_URI.startsWith('mongodb://') && 
        !process.env.MONGO_URI.startsWith('mongodb+srv://')) {
      throw new Error('Invalid MongoDB connection string format');
    }

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;