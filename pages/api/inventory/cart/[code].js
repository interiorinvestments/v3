import low from 'lowdb';
import FileAsync from 'lowdb/adapters/FileAsync';
import path from 'path';

const cartHandler = async (req, res) => {
  const file = path.resolve('pages/db.json');
  const adapter = new FileAsync(file);
  const db = await low(adapter);

  const {
    query: { code },
    method,
  } = req;

  switch (method) {
    case 'PUT':
      try {
        const { body } = req;
        const { quantity } = body;
        const foundItem = await db.get('cart').find({ code }).value();
        if (foundItem) {
          const quantityDiff = quantity - foundItem.quantity;
          const remaining = foundItem.remaining - quantityDiff;
          await db.get('cart').find({ code }).assign({ remaining, quantity }).write();
          return res.status(202).send(foundItem);
        }
        const newItem = await db.get('cart').push(body).write();
        return res.status(202).send(newItem);
      } catch (err) {
        console.error(err);
        return res.status(400).send(err);
      }
    case 'DELETE':
      try {
        const item = await db.get('cart').remove({ code }).write();
        return res.status(202).send(item);
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
