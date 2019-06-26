import mongoose from 'mongoose';
import { MovieData } from '../types';
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name: String,
  genre: String,
  directorId: String,
});

export default mongoose.model('movies', movieSchema);
