import mongoose from 'mongoose';

export interface DirectorData {
  id: string;
  name: string;
}

export interface MovieData extends mongoose.Document {
  name: string;
  genre: string;
  directorId: string;
}

