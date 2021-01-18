import low from 'lowdb';
import FileAsync from 'lowdb/adapters/FileAsync';

const inventoryHandler = async (req, res) => {
  const adapter = new FileAsync('db.json');
  const db = await low(adapter);

  const {
    query: { code },
    method,
  } = req;
  const body = JSON.parse(req.body);
  const { quantity } = body;

  switch (method) {
    case 'GET':
      try {
        const item = await db.get('items').find({ code }).value();
        res.status(200).send(item);
      } catch (err) {
        console.error(err);
        res.status(400).send(err);
      }
      break;
    case 'PUT':
      try {
        const { remaining } = await db.get('items').find({ code }).value();

        const newRemaining = remaining - quantity;

        const updatedItem = await db.get('items').find({ code }).assign({ remaining: newRemaining, quantity }).write();
        // add item to cart
        res.status(204).send(updatedItem);
      } catch (err) {
        console.error(err);
        res.status(400).send(err);
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default inventoryHandler;
