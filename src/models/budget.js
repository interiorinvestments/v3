import mongoose from 'mongoose';

const budgetSchema = new mongoose.Schema({
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
  price: {
    type: Number,
  },
  budgetQuantity: {
    type: Number,
  },
  budgetTotal: {
    type: Number,
  },
});

export default mongoose.models.Budget || mongoose.model('Budget', budgetSchema);
