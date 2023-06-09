import mongoose from "mongoose";

function createType(type: any, unique: boolean, length?: number) {
  return {
    type: type,
    unique: unique,
    length: length || 255,
  };
}

export const UserSchema = new mongoose.Schema({
  email: createType(String, true),
  password: createType(String, false),
  first_name: String,
  last_name: String,
  is_active: Boolean,
  create_at: {
    type: Date,
    default: Date.now,
  },
  modified_at: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre('save', function (next) {
  this.modified_at = new Date(); // Update modified_at to the current date and time
  next();
});
