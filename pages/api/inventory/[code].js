import low from 'lowdb';
import FileAsync from 'lowdb/adapters/FileAsync';
import path from 'path';

const inventoryHandler = async (req, res) => {
  const file = path.resolve('pages/db.json');
  const adapter = new FileAsync(file);
  const db = await low(adapter);

  const {
    query: { code },
    method,
  } = req;

  switch (method) {
    case 'GET':
      try {
        const item = await db.get('items').find({ code }).value();
        return res.status(200).send(item);
      } catch (err) {
        console.error(err);
        return res.status(400).send(err);
      }
    case 'PUT':
      try {
        const { quantity } = req.body;
        const foundItem = await db.get('items').find({ code }).value();
        const quantityDiff = quantity - foundItem.quantity;
        const remaining = foundItem.remaining - quantityDiff;
        const updatedItem = await db.get('items').find({ code }).assign({ remaining, quantity }).write();
        return res.status(202).json(updatedItem);
      } catch (err) {
        console.error(err);
        return res.status(400).send(err);
      }
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default inventoryHandler;
