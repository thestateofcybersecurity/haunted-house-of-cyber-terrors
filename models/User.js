import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  progress: {
    currentRoom: {
      type: Number,
      default: 0,
    },
    completedRooms: {
      type: [Number],
      default: [],
    },
    score: {
      type: Number,
      default: 0,
    },
  },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
