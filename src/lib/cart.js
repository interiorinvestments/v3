import Cart from '../models/cart';
import dbConnect from '../utils/dbConnect';

export async function getCart() {
  try {
    await dbConnect();
    const cart = await Cart.find({});
    return cart;
  } catch (err) {
    throw new Error(err);
  }
}

export async function getCartItem(id) {
  try {
    await dbConnect();
    const cartItem = await Cart.findById(id);
    return cartItem;
  } catch (err) {
    throw new Error(err);
  }
}

export async function updateCartItem(id, values) {
  try {
    await dbConnect();
    const cartItem = await Cart.findByIdAndUpdate(id, { ...values }, { new: true });
    return cartItem;
  } catch (err) {
    throw new Error(err);
  }
}

export async function addCartItem(item) {
  try {
    await dbConnect();
    const cartItem = new Cart(item);
    await cartItem.save();
    return cartItem;
  } catch (err) {
    throw new Error(err);
  }
}

export async function deleteCartItem(id) {
  try {
    await dbConnect();
    const deletedItem = await Cart.findByIdAndRemove(id);
    return deletedItem;
  } catch (err) {
    throw new Error(err);
  }
}
