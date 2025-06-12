// models/Item.js
import mongoose from "mongoose";

/*
  name: string;
  attend: any;
  events?: any[];
  guest?: any[];
  see_regard: string;
  regard: string;
*/

const regardSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  attend: {
    type: String,
  },
  events: {
    type: Array,
  },
  guest: {
    type: Array,
  },
  see_regard: {
    type: String,
  },
  regard: {
    type: String,
  },
  created_date: {
    type: Date,
  },
});

export default mongoose.models.regard || mongoose.model("regard", regardSchema);
