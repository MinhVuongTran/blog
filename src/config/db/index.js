import mongoose from 'mongoose';

export async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
        console.log('connect successfully');
    } catch (error) {
        console.log('error'); 
    }
}