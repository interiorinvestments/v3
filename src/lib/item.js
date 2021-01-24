import Item from '../models/item';
import dbConnect from '../utils/dbConnect';

export async function getItem(id) {
  try {
    await dbConnect();
    const item = await Item.findById(id);
    return item;
  } catch (err) {
    throw new Error(err);
  }
}

export async function getItems() {
  try {
    await dbConnect();
    const items = await Item.find({});
    return items;
  } catch (err) {
    throw new Error(err);
  }
}

export async function updateItem(id, values) {
  try {
    await dbConnect();
    const item = await Item.findByIdAndUpdate(id, { ...values }, { new: true });
    return item;
  } catch (err) {
    throw new Error(err);
  }
}
