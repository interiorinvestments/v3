import {
  addCartItem, deleteCartItem, getCartItem, updateCartItem,
} from 'lib/cart';

const cartHandler = async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case 'PUT':
      try {
        const { body } = req;
        const { quantity } = body;
        const foundItem = await getCartItem(id);
        if (foundItem) {
          const quantityDiff = quantity - foundItem.quantity;
          const remaining = foundItem.remaining - quantityDiff;
          const updatedItem = await updateCartItem(id, { remaining, quantity });
          return res.status(202).send(updatedItem);
        }
        const newItem = await addCartItem(body);
        return res.status(202).send(newItem);
      } catch (err) {
        console.error(err);
        return res.status(400).send(err);
      }
    case 'DELETE':
      try {
        const deletedItem = await deleteCartItem(id);
        return res.status(202).send(deletedItem);
      } catch (err) {
        console.error(err);
        return res.status(400).send(err);
      }
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default cartHandler;
