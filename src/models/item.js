import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  series: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  remaining: {
    type: Number,
  },
  total: {
    type: Number,
  },
  area: {
    type: Array,
  },
  quantity: {
    type: Number,
  },
});

export default mongoose.models.Item || mongoose.model('Item', itemSchema);
